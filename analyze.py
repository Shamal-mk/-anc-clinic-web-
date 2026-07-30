from PIL import Image

img = Image.open("public/logos/ANC Logo.jpeg").convert("RGB")
width, height = img.size
pixels = img.load()

green_pixels = 0
gray_pixels = 0
for y in range(height):
    for x in range(width):
        r, g, b = pixels[x, y]
        if r < 240 or g < 240 or b < 240:
            if g > r + 15 and g > b + 15:
                green_pixels += 1
            else:
                gray_pixels += 1

print("Green pixels:", green_pixels)
print("Gray pixels:", gray_pixels)
