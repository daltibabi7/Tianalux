import re
import sys

path = r'c:\Users\Hp\Downloads\neo fx folder\tianalux\index.html'
try:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
except Exception as e:
    print(f"Failed to read: {e}")
    sys.exit(1)

# Update durations
content = re.sub(r"(name:\s*'Traditional Locs Installation'.*?dur:\s*')([^']*)", r"\g<1>8 Hours", content)
content = re.sub(r"(name:\s*'Traditional Locs Retightening'.*?dur:\s*')([^']*)", r"\g<1>3 Hours", content)
content = re.sub(r"(name:\s*'Microlocs Installation'.*?dur:\s*')([^']*)", r"\g<1>Full Day (Unavailable for additional bookings on the same day). Estimated Time: 12+ Hours", content)
content = re.sub(r"(name:\s*'Microlocs Retightening'.*?dur:\s*')([^']*)", r"\g<1>8 Hours", content)
content = re.sub(r"(name:\s*'.*?mbr.*? Brows'.*?dur:\s*')([^']*)", r"\g<1>4 Hours", content)
content = re.sub(r"(name:\s*'.*?mbr.*? Brow Touch-Up'.*?dur:\s*')([^']*)", r"\g<1>2.5 Hours", content)
content = re.sub(r"(name:\s*'Luxury Pedicure'.*?dur:\s*')([^']*)", r"\g<1>1 Hour", content)
content = re.sub(r"(name:\s*'Cornrows'.*?dur:\s*')([^']*)", r"\g<1>1 Hour", content)

# Update hours
hours_replacements = {
    r"Monday:\s*.*?<": r"Monday: 9 AM – 8 PM<",
    r"Tuesday:\s*.*?<": r"Tuesday: 7 AM – 7 PM<",
    r"Wednesday:\s*.*?<": r"Wednesday: 7 AM – 5 PM<",
    r"Thursday:\s*.*?<": r"Thursday: 7 AM – 5 PM<",
    r"Friday:\s*.*?<": r"Friday: 9 AM – 8 PM<",
    r"Saturday:\s*.*?<": r"Saturday: 10 AM – 6 PM<",
    r"Sunday:\s*.*?<": r"Sunday: Closed<"
}
for k, v in hours_replacements.items():
    content = re.sub(k, v, content, flags=re.IGNORECASE)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updates applied successfully.")
