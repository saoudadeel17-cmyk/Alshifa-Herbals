export default function Disclaimer() {
    return (
      <div
        style={{
          background: 'var(--blush)',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          padding: '18px 0',
        }}
      >
        <div className="wrap" style={{ maxWidth: 900 }}>
          <p style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.6, textAlign: 'center', margin: 0 }}>
            <strong>Disclaimer:</strong> These statements have not been evaluated by DRAP (Drug
            Regulatory Authority of Pakistan). This product is not intended to diagnose, treat, cure
            or prevent any disease. Individual results may vary. Please consult your doctor before
            use, especially if you are pregnant, nursing, taking medication, or have a medical
            condition.
          </p>
        </div>
      </div>
    );
  }