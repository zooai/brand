# Zoo Labs Color Guidelines

## Color Palette

### Primary Colors

#### Emerald Green
- **Hex**: `#2ECC71`
- **RGB**: `rgb(46, 204, 113)`
- **HSL**: `hsl(145, 63%, 49%)`
- **Usage**: Primary brand color, CTAs, growth indicators
- **Represents**: Growth, sustainability, community

#### Forest Green
- **Hex**: `#27AE60`
- **RGB**: `rgb(39, 174, 96)`
- **HSL**: `hsl(145, 63%, 42%)`
- **Usage**: Headers, stable elements, foundation
- **Represents**: Stability, trust, nature

#### Amber Accent
- **Hex**: `#F39C12`
- **RGB**: `rgb(243, 156, 18)`
- **HSL**: `hsl(37, 90%, 51%)`
- **Usage**: Accents, highlights, collaboration indicators
- **Represents**: Energy, optimism, warmth

### Supporting Colors

#### Neutral Palette
- **Pure White**: `#FFFFFF` - Backgrounds, clean spaces
- **Off-White**: `#F8F9FA` - Subtle backgrounds
- **Light Gray**: `#E9ECEF` - Borders, dividers
- **Medium Gray**: `#6C757D` - Secondary text
- **Dark Gray**: `#343A40` - Primary text
- **Pure Black**: `#000000` - Maximum contrast elements

#### Extended Palette

**Success States**
- **Success Green**: `#28A745` (shared with primary) - Confirmations
- **Success Light**: `#D4EDDA` - Success backgrounds

**Warning States**
- **Warning Amber**: `#FFC107` - Cautions, pending states
- **Warning Light**: `#FFF3CD` - Warning backgrounds

**Error States**
- **Error Red**: `#DC3545` - Errors, critical alerts
- **Error Light**: `#F8D7DA` - Error backgrounds

**Info States**
- **Info Blue**: `#17A2B8` - Informational messages
- **Info Light**: `#D1ECF1` - Info backgrounds

## Color Combinations

### Recommended Pairings

1. **Hero Sections**
   - Background: Forest Green (#27AE60)
   - Text: White (#FFFFFF)
   - Accent: Emerald Green (#2ECC71)

2. **Call-to-Action Buttons**
   - Background: Emerald Green (#2ECC71)
   - Text: White (#FFFFFF)
   - Hover: Forest Green (#27AE60)

3. **Cards & Components**
   - Background: White (#FFFFFF)
   - Border: Light Gray (#E9ECEF)
   - Accent: Amber (#F39C12)

4. **Dark Mode**
   - Background: Dark Gray (#1A1A1A)
   - Surface: Medium Dark (#2D2D2D)
   - Text: Off-White (#F8F9FA)
   - Accent: Emerald Green (#2ECC71)

### Gradient Usage

#### Primary Gradient
```css
background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%);
```
- **Usage**: Hero sections, community highlights, success states
- **Direction**: 135° (diagonal)

#### Accent Gradient
```css
background: linear-gradient(90deg, #F39C12 0%, #27AE60 100%);
```
- **Usage**: Collaboration indicators, energy states
- **Direction**: 90° (left to right)

#### Subtle Gradient
```css
background: linear-gradient(180deg, rgba(46,204,113,0.1) 0%, rgba(39,174,96,0.05) 100%);
```
- **Usage**: Backgrounds, cards, subtle emphasis
- **Direction**: 180° (top to bottom)

## Accessibility

### Contrast Ratios (WCAG 2.1)

**Text on Backgrounds**:
- White on Forest Green: 4.86:1 (AA) ✅
- Forest Green on White: 4.86:1 (AA) ✅
- Emerald Green on White: 3.46:1 (AA for large text) ⚠️
- White on Emerald Green: 3.46:1 (AA for large text) ⚠️
- Amber on White: 2.37:1 (Insufficient) ❌ Use for accents only

**Recommendations**:
- Use Forest Green for body text on white
- Use Emerald Green for large text (18pt+) or bold text (14pt+)
- Never use Amber as text color on white backgrounds
- Always test color combinations with accessibility tools

### Color Blindness

**Deuteranopia/Protanopia (Red-Green)**:
- Green may appear brown/yellow
- Use additional indicators (icons, patterns)

**Tritanopia (Blue-Yellow)**:
- Green remains relatively distinct
- Amber may be difficult to distinguish from green

**Solution**: Never rely on color alone—use icons, labels, or patterns as secondary indicators.

## Usage Guidelines

### Do's ✅

1. **Use Green for Growth & Community**
   - Primary actions use Emerald Green
   - Headers and navigation use Forest Green
   - Community features emphasized with green

2. **Maintain Color Hierarchy**
   - Primary: Emerald Green
   - Secondary: Forest Green
   - Tertiary: Amber
   - Supporting: Grays

3. **Use Sufficient Contrast**
   - Test all text/background combinations
   - Aim for WCAG AAA (7:1) when possible
   - Minimum WCAG AA (4.5:1) for body text

4. **Apply Gradients for Community/Collaboration**
   - Use for community features
   - Keep gradients subtle for backgrounds
   - Ensure text remains readable

### Don'ts ❌

1. **Don't Modify Brand Colors**
   - Never change hue, saturation, or brightness
   - Don't create unauthorized variations
   - Don't substitute similar greens

2. **Don't Overuse Bright Colors**
   - Too much emerald creates visual fatigue
   - Use amber sparingly as accent only
   - Balance with neutral grays

3. **Don't Use Amber for Text**
   - Never place amber text on white backgrounds
   - Don't use as primary text color
   - Only use as accent color for non-text elements

4. **Don't Mix with Corporate Colors**
   - Avoid blue (reserved for tech companies)
   - Don't use red (contradicts growth message)
   - Keep palette organic and natural

## Dark Mode Adaptations

### Color Adjustments

When implementing dark mode:

1. **Backgrounds**
   - Light (#FFFFFF) → Dark Gray (#1A1A1A)
   - Off-White (#F8F9FA) → Medium Dark (#2D2D2D)

2. **Text**
   - Dark Gray (#343A40) → Off-White (#F8F9FA)
   - Medium Gray (#6C757D) → Light Gray (#CCCCCC)

3. **Brand Colors**
   - Keep Emerald Green (#2ECC71) - sufficient contrast on dark
   - Keep Forest Green (#27AE60) - sufficient contrast on dark
   - Amber (#F39C12) - brighten slightly to #FFAD19 for visibility

4. **Borders & Dividers**
   - Light Gray (#E9ECEF) → Dark Border (#404040)

## Technical Implementation

### CSS Variables

```css
:root {
  /* Primary Colors */
  --zoo-emerald: #2ECC71;
  --zoo-forest: #27AE60;
  --zoo-amber: #F39C12;
  
  /* Neutral Colors */
  --zoo-white: #FFFFFF;
  --zoo-off-white: #F8F9FA;
  --zoo-light-gray: #E9ECEF;
  --zoo-medium-gray: #6C757D;
  --zoo-dark-gray: #343A40;
  --zoo-black: #000000;
  
  /* State Colors */
  --zoo-success: #28A745;
  --zoo-warning: #FFC107;
  --zoo-error: #DC3545;
  --zoo-info: #17A2B8;
}

[data-theme="dark"] {
  --zoo-amber: #FFAD19;
  --zoo-white: #1A1A1A;
  --zoo-off-white: #2D2D2D;
  --zoo-light-gray: #404040;
  --zoo-medium-gray: #CCCCCC;
  --zoo-dark-gray: #F8F9FA;
  --zoo-black: #FFFFFF;
}
```

### Tailwind Configuration

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        zoo: {
          emerald: '#2ECC71',
          forest: '#27AE60',
          amber: '#F39C12',
          gray: {
            50: '#F8F9FA',
            100: '#E9ECEF',
            500: '#6C757D',
            900: '#343A40',
          }
        }
      }
    }
  }
}
```

## Examples

### Community Hero Section
```html
<div style="background: linear-gradient(135deg, #2ECC71 0%, #27AE60 100%); color: #FFFFFF;">
  <h1>Democratizing AI</h1>
  <p>Join our global community building open AI</p>
  <button style="background: #F39C12; color: #FFFFFF;">Get Involved</button>
</div>
```

### Contributor Card
```html
<div style="background: #FFFFFF; border: 1px solid #E9ECEF;">
  <h3 style="color: #343A40;">Active Contributors</h3>
  <p style="color: #6C757D;">1,247 community members</p>
  <div style="background: linear-gradient(90deg, #2ECC71 0%, transparent 100%); height: 4px;"></div>
</div>
```

---

**Last Updated**: 2025-10-29  
**Version**: 1.0.0  
**Organization**: Zoo Labs Foundation (501c3)
