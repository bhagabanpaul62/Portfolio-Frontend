import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiX, FiSave } from "react-icons/fi";

const EditProject = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    longDescription: "",
    technologies: [],
    features: [],
    githubLink: "",
    liveLink: "",
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
      setTimeout(() => {
        setFormData({
          id: "12345",
          title: "Example Project",
          description: "This is an example project description.",
          longDescription: "This is a longer, more detailed description of the project that explains the background, purpose, and implementation details.",
          technologies: ["React", "Node.js", "MongoDB"],
          features: ["Responsive Design", "User Authentication", "Real-time Updates"],
          githubLink: "https://github.com/example",
          liveLink: "https://example.com",
          duration: "3 months",
          role: "Full Stack Developer",
          impact: "Increased user engagement by 40%",
          challenges: "Implementing real-time updates with WebSockets was challenging but rewarding.",
          category: "web",
          status: "completed",
          created_at: "2023-05-15T10:30:00Z",
        });
        setExistingImages([
          { id: 1, url: "https://example.com/image1.jpg" },
          { id: 2, url: "https://example.com/image2.jpg" },
        ]);
        setIsLoading(false);
      }, 1000);
    };

    fetchProjectData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayInputChange = (e, field) => {
    const values = e.target.value.split(',').map(item => item.trim());
    setFormData(prev => ({
      ...prev,
      [field]: values
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

  const removeExistingImage = (id) => {
    setExistingImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your update logic here
    console.log({ ...formData, newImages: images, existingImages });
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
                name="longDescription"
                value={formData.longDescription}
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
                value={formData.technologies.join(', ')}
                onChange={(e) => handleArrayInputChange(e, 'technologies')}
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
                value={formData.features.join(', ')}
                onChange={(e) => handleArrayInputChange(e, 'features')}
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
                  name="githubLink"
                  value={formData.githubLink}
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
                  name="liveLink"
                  value={formData.liveLink}
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
                value={formData.created_at ? new Date(formData.created_at).toISOString().slice(0, 16) : ""}
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
                  {existingImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <img
                        src={image.url}
                        alt="Project"
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeExistingImage(image.id)}
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
