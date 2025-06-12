import React, { useState, useEffect, useContext } from "react";
import { frameData, motion } from "framer-motion";
import { FiUpload, FiX, FiSave } from "react-icons/fi";
import { DataContext } from "../../../context/DataContetx";
import { useParams } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams();
  const { fetcProjectById, updateProject } = useContext(DataContext);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    long_description: "",
    technologies: [],
    features: [],
    github_link: "",
    live_demo: "",
    duration: "",
    role: "",
    impact: "",
    challenges: "",
    category: "",
    status: "",
    created_at: "",
  });
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated API call to get project data
    const fetchProjectData = async () => {
      // Replace with your actual API call
      if (!id) {
        console.log("no project id is faount ", id);
        return;
      }
      try {
        const data = await fetcProjectById(id);

        setFormData({
          id: data.id,
          title: data.title ?? "Untitled Project",
          description: data.description ?? "",
          long_description: data.long_description ?? "", // ✅ fixed
          role: data.role ?? "Developer",
          duration: data.duration ?? "N/A",
          impact: data.impact ?? "",
          features: Array.isArray(data.features) ? data.features : [],
          technologies: Array.isArray(data.technologies)
            ? data.technologies
            : [],
          images: Array.isArray(data.images) ? data.images : [],
          github_link: data.github_link ?? "", // ✅ fixed
          live_demo: data.live_demo ?? "", // ✅ fixed
          challenges: data.challenges ?? "",
          category: data.category ?? "",
          status: data.status ?? "",
          created_at: data.created_at ?? "",
        });
        console.log(frameData);

        setExistingImages(Array.isArray(data.images) ? data.images : []);
      } catch (err) {
        console.error("Error fetching project by ID:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (e, field) => {
    const values = e.target.value.split(",").map((item) => item.trim());
    setFormData((prev) => ({
      ...prev,
      [field]: values,
    }));
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer?.files || e.target.files || []);
    const validFiles = files.filter((file) => file.type.startsWith("image/"));

    setImages((prev) => [
      ...prev,
      ...validFiles.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  };

  const removeNewImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (url) => {
    setExistingImages((prev) => prev.filter((img) => img!== url));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newImageUrls = await uploadImageToSupabase();

      const updatedImages = [
        ...existingImages.map((img) =>
          typeof img === "string" ? img : img.url
        ), // handle different formats
        ...newImageUrls,
      ];

      const payload = {
        ...formData,
        images: updatedImages, // updated image list
      };

      await updateProject(formData.id , payload); // assumes you have this function from context

      console.log("Project updated successfully:", payload);
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  const uploadImageToSupabase = async () => {
    const imageUrls = [];
  
    for (const img of images) {
      const file = img.file;
      const filename = `${Date.now()}-${file.name}`;
  
      const { data, error } = await supabase
        .storage
        .from("project-image")
        .upload(filename, file);
  
      if (error) {
        console.error("Upload failed:", error);
        continue;
      }
  
      const { data: publicUrlData } = supabase
        .storage
        .from("project-image")
        .getPublicUrl(filename);
  
      imageUrls.push(publicUrlData.publicUrl);
    }
  
    return imageUrls;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Edit Project
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            {/* Project ID - Read Only */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Project ID
              </label>
              <input
                type="text"
                name="id"
                value={formData.id}
                readOnly
                className="w-full bg-gray-800/50 text-gray-400 rounded-lg px-4 py-3 focus:outline-none transition-colors cursor-not-allowed"
              />
            </div>

            {/* Project Title */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="Enter project title"
                required
              />
            </div>

            {/* Project Description */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Short Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="Enter a brief project description"
                required
              />
            </div>

            {/* Long Description */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Long Description
              </label>
              <textarea
                name="long_description"
                value={formData.long_description}
                onChange={handleInputChange}
                rows="6"
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="Enter a detailed project description"
              />
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Technologies Used (comma separated)
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies.join(", ")}
                onChange={(e) => handleArrayInputChange(e, "technologies")}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="e.g., React, Node.js, MongoDB"
                required
              />
            </div>

            {/* Features */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Features (comma separated)
              </label>
              <input
                type="text"
                name="features"
                value={formData.features.join(", ")}
                onChange={(e) => handleArrayInputChange(e, "features")}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="e.g., Responsive Design, User Authentication, Real-time Updates"
              />
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  GitHub Link
                </label>
                <input
                  type="url"
                  name="github_link"
                  value={formData.github_link}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="https://github.com/..."
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Live Demo Link
                </label>
                <input
                  type="url"
                  name="live_demo"
                  value={formData.live_demo}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="https://..."
                />
              </div>
            </div>

            {/* Duration and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., 3 months"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., Full Stack Developer"
                />
              </div>
            </div>

            {/* Impact */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Impact
              </label>
              <input
                type="text"
                name="impact"
                value={formData.impact}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="e.g., Increased user engagement by 40%"
              />
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Challenges
              </label>
              <textarea
                name="challenges"
                value={formData.challenges}
                onChange={handleInputChange}
                rows="3"
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="Describe challenges faced during development"
              />
            </div>

            {/* Category and Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                >
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="desktop">Desktop App</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                >
                  <option value="completed">Completed</option>
                  <option value="in-progress">In Progress</option>
                  <option value="planned">Planned</option>
                </select>
              </div>
            </div>

            {/* Created At */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Created At
              </label>
              <input
                type="datetime-local"
                name="created_at"
                value={
                  formData.created_at
                    ? new Date(formData.created_at).toISOString().slice(0, 16)
                    : ""
                }
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <label className="block text-gray-300 text-sm font-medium mb-4">
              Project Images
            </label>

            {/* Existing Images */}
            {existingImages.length > 0 && (
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm mb-3">Current Images</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {existingImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt="Project"
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeExistingImage(image)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Images Upload */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700 hover:border-gray-600"
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                setIsDragging(false);
              }}
              onDrop={handleImageDrop}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageDrop}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-400">
                  Drag & drop new images here or click to browse
                </p>
              </label>
            </div>

            {/* New Image Previews */}
            {images.length > 0 && (
              <div className="mt-6">
                <h3 className="text-gray-400 text-sm mb-3">New Images</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeNewImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 rounded-lg font-medium border border-gray-600 text-gray-300 hover:bg-gray-800/50 transition-colors"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
            >
              <FiSave className="w-5 h-5" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditProject;
