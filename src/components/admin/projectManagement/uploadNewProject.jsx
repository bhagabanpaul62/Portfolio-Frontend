import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiX } from "react-icons/fi";

const UploadNewProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    category: "web",
    status: "completed",
  });
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({ ...formData, images });
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
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="Enter project description"
                required
              />
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Technologies Used
              </label>
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                placeholder="e.g., React, Node.js, MongoDB"
                required
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
                  Live Link
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

            {/* Category and Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
