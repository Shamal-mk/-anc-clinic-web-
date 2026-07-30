from PIL import Image

def fix_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # The background is mostly near-white (255,255,255).
    # We will only remove pixels that are EXTREMELY close to pure white,
    # and we will use a much sharper dropoff so we don't fade the light gray parts of the logo.
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Simple threshold for white background removal
            if r > 245 and g > 245 and b > 245:
                # Calculate how close it is to pure white
                brightness = (r + g + b) / 3
                if brightness > 250:
                    pixels[x, y] = (r, g, b, 0)
                else:
                    # Smooth blend for anti-aliasing the edges of the logo
                    # Brightness 245 -> alpha 255 (opaque)
                    # Brightness 250 -> alpha 0 (transparent)
                    alpha = int((250 - brightness) / 5.0 * 255)
                    pixels[x, y] = (r, g, b, alpha)
            else:
                # Keep original logo pixels fully opaque
                pixels[x, y] = (r, g, b, 255)

    img.save(output_path, "PNG")

fix_logo("public/logos/ANC Logo.jpeg", "public/logos/ANC Logo.png")
print("Fixed transparency without fading the logo.")
