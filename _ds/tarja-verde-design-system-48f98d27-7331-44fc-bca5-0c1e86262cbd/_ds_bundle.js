/* @ds-bundle: {"format":4,"namespace":"DesignSystem_48f98d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CapsuleFrame","sourcePath":"components/core/CapsuleFrame.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"be1d18d3b9c0","components/core/Button.jsx":"ab3ed473114a","components/core/CapsuleFrame.jsx":"4a15e799d1b2","components/core/Card.jsx":"665be49703a7","components/navigation/Navbar.jsx":"d02de6564b0a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_48f98d = window.DesignSystem_48f98d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const variantStyles = {
  green: {
    background: 'var(--tv-green)',
    color: 'var(--tv-white)'
  },
  orange: {
    background: 'var(--tv-orange)',
    color: 'var(--tv-white)'
  },
  brown: {
    background: 'var(--tv-brown)',
    color: 'var(--tv-white)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--tv-brown)',
    border: '1.5px solid var(--tv-brown)'
  }
};
function Badge({
  children,
  variant = 'green',
  style
}) {
  const v = variantStyles[variant] || variantStyles.green;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-brand)',
      fontWeight: 700,
      fontSize: '0.8125rem',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  sm: {
    padding: '8px 20px',
    fontSize: '0.875rem'
  },
  md: {
    padding: '12px 28px',
    fontSize: '1rem'
  },
  lg: {
    padding: '16px 36px',
    fontSize: '1.125rem'
  }
};
const variantStyles = {
  primary: {
    background: 'var(--tv-green)',
    color: 'var(--tv-white)',
    border: '2px solid var(--tv-green)'
  },
  secondary: {
    background: 'var(--tv-orange)',
    color: 'var(--tv-white)',
    border: '2px solid var(--tv-orange)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--tv-brown)',
    border: '2px solid var(--tv-brown)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--tv-brown)',
    border: '2px solid transparent'
  }
};
const hoverFilter = {
  primary: 'brightness(0.92)',
  secondary: 'brightness(0.92)',
  outline: 'brightness(0.95)',
  ghost: 'brightness(0.95)'
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = variantStyles[variant] || variantStyles.primary;
  const s = sizeStyles[size] || sizeStyles.md;
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 700,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      letterSpacing: '0.01em',
      transition: 'filter 0.15s ease, transform 0.1s ease',
      filter: !disabled && hover ? hoverFilter[variant] : 'none',
      transform: !disabled && hover ? 'translateY(-1px)' : 'none',
      opacity: disabled ? 0.45 : 1,
      ...v,
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CapsuleFrame.jsx
try { (() => {
/* The capsule/pill silhouette, rotated ~45°, is Tarja Verde's signature framing device —
   used throughout the guideline to crop photos and to contain the logo mark. */
function CapsuleFrame({
  image,
  children,
  rotate = -45,
  width = 280,
  height = 400,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      transform: `rotate(${rotate}deg)`,
      boxShadow: 'var(--shadow-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--tv-brown)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      transform: `rotate(${-rotate}deg) scale(1.5)`
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : children));
}
Object.assign(__ds_scope, { CapsuleFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CapsuleFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  children,
  image,
  surface = 'light',
  style
}) {
  const dark = surface === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--tv-brown)' : 'var(--tv-white)',
      color: dark ? 'var(--tv-white)' : 'var(--tv-brown)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-soft)',
      fontFamily: 'var(--font-brand)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      fontSize: '1.25rem',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.5,
      opacity: dark ? 0.92 : 0.85
    }
  }, children)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  logo,
  links = [],
  ctaLabel = 'Bora?',
  onCta
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      fontFamily: 'var(--font-brand)',
      background: 'var(--tv-cream)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Tarja Verde",
    style: {
      height: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      color: 'var(--tv-brown)',
      fontWeight: 600,
      textDecoration: 'none',
      fontSize: '1rem'
    }
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CapsuleFrame = __ds_scope.CapsuleFrame;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
