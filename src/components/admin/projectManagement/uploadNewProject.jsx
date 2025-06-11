import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiX } from "react-icons/fi";
import { DataContext } from "../../../context/DataContetx";

import { supabase } from "../../../supabase";

const UploadNewProject = () => {
  const { uploadProject } = useContext(DataContext);
  const [fromData, setFromData] = useState({
    title: "",
    description: "",
    long_description: "",
    technologies: "",
    features: "",
    github_link: "",
    live_demo: "",
    duration: "",
    role: "",
    impact: "",
    challenges: "",
    category: "web",
    status: "completed",
    created_at: new Date().toISOString().slice(0, 16),
  });

  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

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

  const uploadImageToSupabase = async () => {
    const ImageUrls = [];

    //image upload to supabase

    for (const img of images) {
      const file = img.file;
      const filename = `${Date.now()}-${file.name}`;

      const { data, error } = await supabase.storage
        .from("project-image")
        .upload(filename, file);
      if (error) {
        console.log("upload image ", error);
        continue;
      }

      const { data: publicUrlData } = supabase.storage
        .from("project-image")
        .getPublicUrl(filename);

      ImageUrls.push(publicUrlData.publicUrl);
    }
    return ImageUrls;
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handelOnChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ImageUrls = await uploadImageToSupabase(); //image url uploding function call

      const newProject = {
        //add image data in project
        ...fromData,
        images: ImageUrls, //already an array
        technologies: fromData.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean), //ensure clean array
        features: fromData.features
          .split(",")
          .map((f) => f.trim())
          .filter(Boolean), //ensure clean array
        github_link: fromData.github_link,
        live_demo: fromData.live_demo,
        uploadDate: new Date(), // for `uploadDate` field
      };

      const { data, error } = await uploadProject(newProject); //insert new project
      setFromData({
        title: "",
        description: "",
        long_description: "",
        technologies: "",
        features: "",
        github_link: "",
        live_demo: "",
        duration: "",
        role: "",
        impact: "",
        challenges: "",
        category: "web",
        status: "completed",

        created_at: new Date().toISOString().slice(0, 16),
      });
      if (error) throw error;

      console.log("project upload successful", data);
    } catch (error) {
      console.error("Error uploading project:", error);
      console.log("Error uploading project");
    }
  };

  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Upload New Project
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            {/* Project Title */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={fromData.title}
                onChange={handelOnChange}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="Enter project title"
                required
              />
            </div>

            {/* Short Description */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Short Description
              </label>
              <textarea
                name="description"
                value={fromData.description}
                onChange={handelOnChange}
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
                value={fromData.long_description}
                onChange={handelOnChange}
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
                value={fromData.technologies}
                onChange={handelOnChange}
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
                value={fromData.features}
                onChange={handelOnChange}
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
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="https://github.com/..."
                  value={fromData.github_link}
                  onChange={handelOnChange}
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Live Demo Link
                </label>
                <input
                  type="url"
                  name="live_demo"
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="https://..."
                  value={fromData.live_demo}
                  onChange={handelOnChange}
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
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., 3 months"
                  value={fromData.duration}
                  onChange={handelOnChange}
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Your Role
                </label>
                <input
                  type="text"
                  name="role"
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="e.g., Full Stack Developer"
                  value={fromData.role}
                  onChange={handelOnChange}
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
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="e.g., Increased user engagement by 40%"
                value={fromData.impact}
                onChange={handelOnChange}
              />
            </div>

            {/* Challenges */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Challenges
              </label>
              <textarea
                name="challenges"
                rows="3"
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="Describe challenges faced during development"
                value={fromData.challenges}
                onChange={handelOnChange}
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
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  value={fromData.category}
                  onChange={handelOnChange}
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
                  className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  value={fromData.status}
                  onChange={handelOnChange}
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
                type="text"
                name="created_at"
                value={new Date().toISOString().slice(0, 16).replace("T", " ")}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                readOnly
              />
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <label className="block text-gray-300 text-sm font-medium mb-4">
              Project Images
            </label>

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
                  Drag & drop images here or click to browse
                </p>
              </label>
            </div>

            {/* Image Previews */}
            {images.length > 0 && (
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={image.preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Upload Project
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default UploadNewProject;
