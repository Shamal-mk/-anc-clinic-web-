from PIL import Image

def fix_logo(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            
            # Distance from white
            dist = ((255-r)**2 + (255-g)**2 + (255-b)**2)**0.5
            
            if dist < 15:
                # White background -> transparent
                pixels[x, y] = (r, g, b, 0)
            else:
                # Calculate alpha for smooth edges
                if dist < 60:
                    alpha = int(((dist - 15) / 45.0) * 255)
                else:
                    alpha = 255

                # Is it green?
                if g > r + 10 and g > b + 10:
                    # Keep green leaf exactly as is
                    pixels[x, y] = (r, g, b, alpha)
                else:
                    # Make it dark gray/black
                    # The darker the original, the darker the new one, but generally map to very dark.
                    nr = int(r * 0.25)
                    ng = int(g * 0.25)
                    nb = int(b * 0.25)
                    # To prevent white halos on anti-aliased pixels, we also darken the transition pixels.
                    pixels[x, y] = (nr, ng, nb, alpha)

    img.save(output_path, "PNG")

fix_logo("public/logos/ANC Logo.jpeg", "public/logos/ANC Logo.png")
print("Done making dark.")
