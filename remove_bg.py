from PIL import Image

def remove_white_bg(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Distance from white
            dist = ((255-r)**2 + (255-g)**2 + (255-b)**2)**0.5
            
            # Since the logo itself is light-colored (light gray/gold gradient), 
            # we need a much tighter threshold so we don't accidentally make the logo transparent.
            
            if dist < 2:
                # practically pure white -> fully transparent
                pixels[x, y] = (r, g, b, 0)
            elif dist < 30:
                # transition zone -> partial transparency
                alpha = int(((dist - 2) / 28.0) * 255)
                # To prevent white halos on dark backgrounds, blend the rgb towards black proportionally
                # (Optional, but let's just keep the original RGB and adjust alpha first)
                pixels[x, y] = (r, g, b, alpha)
            else:
                # fully opaque
                pixels[x, y] = (r, g, b, 255)

    img.save(output_path, "PNG")

remove_white_bg("public/logos/ANC Logo.jpeg", "public/logos/ANC Logo.png")
print("Done")
