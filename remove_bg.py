from PIL import Image

def remove_white_bg(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    # Find the background color (assume top-left pixel is background)
    bg_color = pixels[0, 0]
    # If not white enough, force it to white
    if bg_color[0] < 240 or bg_color[1] < 240 or bg_color[2] < 240:
        bg_color = (255, 255, 255, 255)

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Distance from white
            dist = ((255-r)**2 + (255-g)**2 + (255-b)**2)**0.5
            
            # Maximum distance is sqrt(3 * 255^2) = 441.67
            # If distance is small, it's very white.
            # We want smooth edges.
            
            if dist < 10:
                # practically white -> fully transparent
                pixels[x, y] = (r, g, b, 0)
            elif dist < 60:
                # transition zone -> partial transparency
                # Alpha scales from 0 (at dist 10) to 255 (at dist 60)
                alpha = int(((dist - 10) / 50.0) * 255)
                # To prevent white halos, we can "darken" the pixel slightly or just trust the alpha
                # We'll just set alpha
                pixels[x, y] = (r, g, b, alpha)
            else:
                # fully opaque
                pixels[x, y] = (r, g, b, 255)

    img.save(output_path, "PNG")

remove_white_bg("public/logos/ANC Logo.jpeg", "public/logos/ANC Logo.png")
