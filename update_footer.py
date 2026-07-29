import re

with open('src/components/Footer.tsx', 'r') as f:
    content = f.read()

old_loc = """              <li className="flex gap-2">
                <span>📍</span>
                <span className="flex flex-col">
                  <span>ANC Wellness</span>
                  <span>Town Limit</span>
                  <span>Kadappakada</span>
                  <span>Kollam – 691004</span>
                </span>
              </li>"""

new_loc = """              <li className="flex gap-2">
                <span>📍</span>
                <a href="https://maps.app.goo.gl/onQm2HPkjcwb4V3c8?g_st=iw" target="_blank" rel="noopener noreferrer" className="flex flex-col hover:text-white transition-colors">
                  <span>ANC Wellness</span>
                  <span>Town Limit</span>
                  <span>Kadappakada</span>
                  <span>Kollam – 691004</span>
                </a>
              </li>"""

if old_loc in content:
    content = content.replace(old_loc, new_loc)
    with open('src/components/Footer.tsx', 'w') as f:
        f.write(content)
    print("Updated Footer location")
else:
    print("Could not find old location string")
