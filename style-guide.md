## 🎨 Color Palette

| Purpose               | Hex Code   | Description                            |
|----------------------|------------|----------------------------------------|
| **Primary Font**      | `#1E1E1E`  | Nearly black for strong readability    |
| **Secondary Font**    | `#003300`  | Deep forest green                      |
| **Main Background**   | `#e6f0dc`  | Soft pale green for calming base       |
| **Content Background**| `#ffffff`  | White for clean content areas          |
| **Accent 1**          | `#c1e899`  | Light green for highlights/buttons     |
| **Accent 2**          | `#d4b483`  | Warm muted gold for emphasis           |
| **Accent 3**          | `#7a9d54`  | Earthy olive green for icons/hover     |
| **Borders/Dividers**  | `#ccd5ae`  | Subtle neutral for dividing elements   |
| **Error/Alert**       | `#cc0000`  | Clear red for error states             |

---

## 🧠 Typography

| Element      | Font Family                                   | Font Weight | Style Description           |
|--------------|------------------------------------------------|-------------|-----------------------------|
| **Headings** | `"Segoe UI", "Helvetica Neue", Arial, sans-serif` | 600–700     | Uppercase or bolded, large  |
| **Body**     | `"Georgia", "DejaVu Serif", serif`              | 400–500     | Clean, warm, and readable   |
| **Buttons**  | `"Segoe UI", sans-serif`                        | 600         | Uppercase, bold, padded     |

- Line-height: `1.5`
- Letter-spacing: `normal` for body, `0.05em` for buttons
- Heading sizes: `h1: 2.25rem`, `h2: 1.75rem`, `h3: 1.25rem`

---

## 🧭 Navigation Bar

| Element         | Color      |
|-----------------|------------|
| **Background**  | `#003300`  |
| **Font Color**  | `#ffffff`  |
| **Active Link** | `#c1e899`  |
| **Hover Color** | `#7a9d54`  |

---
## 📏 Design Guidelines

- **Buttons**: Rounded corners (`border-radius: 6px`), use Accent 1 background with white text. On hover, swap to Accent 3.
- **Recipe Cards**: Use white content background with subtle border or shadow. Titles in Secondary Font color, buttons in Accent 1.
- **Focus States**: Use `2px solid #c1e899` for keyboard focus indicators.
- **Links**: Use underline on hover, Accent 3 as hover color if inside content.

---

## 🔐 Accessibility

- All color combinations tested for WCAG AA contrast.
- Text size: `16px+` body, minimum `18px` for buttons and nav.
- Use semantic HTML structure with landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`).
- Ensure all interactive elements have accessible labels and states.