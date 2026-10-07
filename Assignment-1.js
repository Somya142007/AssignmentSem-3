// Example path
const filePath = "uploads/users/profile/photo.JPG";

// Convert to lowercase for case-insensitive check
const lowerPath = filePath.toLowerCase();

// Simple check with endsWith
if (
  lowerPath.endsWith(".jpg") ||
  lowerPath.endsWith(".jpeg") ||
  lowerPath.endsWith(".png") ||
  lowerPath.endsWith(".gif") ||
  lowerPath.endsWith(".bmp") ||
  lowerPath.endsWith(".webp") ||
  lowerPath.endsWith(".tiff")
) {
  console.log("This is an image file.");
} else {
  console.log("Not an image file.");
}
