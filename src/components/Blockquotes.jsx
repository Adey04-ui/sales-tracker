import React from "react";

export default function Blockquotes({theme}) {
  return (
    <div className={`blockquotes ${theme === 'dark' && 'dark'}`}>
      <div className={`inlineheader ${theme === 'dark' && 'dark'}`}>
        <span>Blockquotes</span>
      </div>
      <div className="inlineelements">
        <p style={{ marginTop: "15px", color: '#595c5f' }}>Your awesome text goes here.</p>

        <blockquote style={{ margin: "15px 0", marginLeft: '20px', fontSize: "17px" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <p style={{ fontSize: "14px", fontWeight: 200, color: "#999", padding: '10px 0' }}>
            — Someone famous in <i>Source Title</i>
          </p>
        </blockquote>

        <p style={{ fontSize: '15px', color: '#595c5f' }}>Add <code style={{ color: '#f6665d', fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', fontSize: '13px' }}>.text-right</code> for a blockquote with right-aligned content.</p>

        <blockquote style={{ textAlign: "right", margin: "10px 0", fontSize: "17px" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <p style={{ fontSize: "14px", color: "#999", padding: '10px 0' }}>
            — Someone famous in <cite>Source Title</cite>
          </p>
        </blockquote>
      </div>
    </div>
  );
}
