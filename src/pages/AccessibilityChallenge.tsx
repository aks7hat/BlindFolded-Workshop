import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const AccessibilityChallenge = () => {
  const htmlSnippets = [
    `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title></title>

  <style>
    * {
      box-sizing: border-box;
    }
    
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      font-family: Arial, Helvetica, sans-serif;
      background: radial-gradient(1000px at 10% -10%, #f0f4ff 0%, transparent 60%), 
                  radial-gradient(1000px at 110% 10%, #fff3f8 0%, transparent 60%), 
                  linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
    }

    .topbar {
      width: 100%;
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(90deg, #0a0e1a, #1a1f2e);
      border-bottom: 2px solid rgba(123, 97, 255, 0.3);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .header-title {
      text-align: center;
      font-size: 36px;
      font-weight: 800;
      margin: 0;
    }

    .title-blindfolded {
      background: linear-gradient(90deg, #00c2ff, #7b61ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }

    .title-browsing {
      background: linear-gradient(90deg, #7b61ff, #00c2ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }

    .container {
      display: flex;
      gap: 28px;
      padding: 22px 26px;
      height: calc(100vh - 130px);
      min-height: 420px;
    }

    .banner {
      width: 70%;
      border-radius: 16px;
      box-shadow: 0 12px 40px rgba(20, 30, 55, 0.25);
      overflow: hidden;
    }

    .banner img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .side-form {
      width: 30%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      border-radius: 16px;
      background: linear-gradient(180deg, rgba(255,255,255,0.85), rgba(249,249,249,0.95));
      box-shadow: 0 16px 50px rgba(20, 30, 55, 0.18);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(0,0,0,0.06);
    }

    .side-form .title {
      font-size: 26px;
      margin-bottom: 8px;
      color: #ffffff;
      background-color: #ff6b6b;
      padding: 4px 8px;
      border-radius: 6px;
    }

    .field-label {
      margin-bottom: 6px;
      font-size: 14px;
      color: #475569;
      font-weight: 600;
    }

    .fake-field {
      padding: 10px;
      min-height: 36px;
      background: #fff;
      border: 1px solid #d5d9e2;
      border-radius: 10px;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }

    .fake-field:hover {
      box-shadow: 0 6px 20px rgba(15, 23, 42, 0.07);
      transform: translateY(-1px);
    }

    .submit-box {
      padding: 12px;
      background: linear-gradient(90deg, #0a64ff, #7b61ff);
      color: #fff;
      text-align: center;
      font-weight: 600;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.3);
      box-shadow: 0 10px 30px rgba(123, 97, 255, 0.35);
      transition: transform 0.15s ease, box-shadow 0.2s ease;
      cursor: pointer;
    }

    .submit-box:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px rgba(123, 97, 255, 0.45);
    }
  </style>
</head>

<body>
  <div class="topbar" tabindex="5">
    
    <div class="header-title" aria-hidden="true">
      <span class="title-blindfolded">blindfolded</span>
      <span class="title-browsing"> Browsing</span>
    </div>

  </div>
  <div class="container">
    <div class="banner" tabindex="3">
      <img src="https://www.blindfoldedbrowsing.live/2ee32e23e.png">
    </div>
    <div class="side-form" tabindex="7">
      <div class="title" tabindex="12">Workshop — Register</div>
      
      <div tabindex="22">
        <div class="field-label">Participant Name</div>
        <div class="fake-field" contenteditable="true" tabindex="30">my_name</div>
      </div>
      
      <div tabindex="9">
        <div class="field-label">Email Address</div>
        <div class="fake-field" contenteditable="true" tabindex="14">my_email</div>
      </div>
      
      <div tabindex="18">
        <div class="field-label">Organization / School</div>
        <div class="fake-field" contenteditable="true" tabindex="19"></div>
      </div>
      
      <div tabindex="21">
        <div class="field-label">Reason to join</div>
        <div class="fake-field" contenteditable="true" tabindex="22"></div>
      </div>
      
      <div class="submit-box" tabindex="2">Click Me</div>
      
    </div>
  </div>
</body>
</html>
`,
    `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  
  <style>
    * {
      box-sizing: border-box;
    }
    
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: Inter, system-ui, Arial;
      font-size: 13px;
      color: #9aa0b0;
      background: #ffffff;
    }
    
    .topbar {
      width: 100%;
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(90deg, #0a0e1a, #1a1f2e);
      border-bottom: 2px solid rgba(123, 97, 255, 0.3);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }
    
    .header-title {
      text-align: center;
      font-size: 36px;
      font-weight: 800;
      margin: 0;
    }
    
    .title-blindfolded {
      background: linear-gradient(90deg, #00c2ff, #7b61ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }
    
    .title-browsing {
      background: linear-gradient(90deg, #7b61ff, #00c2ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }
    
    .hero {
      margin: 16px auto;
      width: 94%;
      height: 220px;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      background: linear-gradient(120deg, rgba(123, 97, 255, 0.08), rgba(0, 194, 255, 0.04));
    }
    
    .hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.6;
    }
    
    .hero-title {
      position: absolute;
      left: 24px;
      bottom: 20px;
      margin: 0;
      font-size: 28px;
      color: #0b0b0b;
    }
    
    .cats {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      overflow-x: auto;
      padding: 12px;
      width: 94%;
      margin: 10px auto;
    }
    
    .cat {
      text-align: center;
      min-width: 140px;
      height: 76px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.01));
      cursor: pointer;
      color: #9aa0b0;
    }
    
    .product-section {
      width: 94%;
      margin: 18px auto;
    }
    
    .row-title {
      font-size: 15px;
      color: #ffffff;
      background-color: #ff6b6b;
      padding: 8px 12px;
      border-radius: 4px;
      text-align: center;
      margin: 1rem auto;
      width: min-content;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 220px));
      gap: 14px;
      justify-content: center;
      justify-items: center;
    }
    
    .item {
      background: #fafafa;
      border-radius: 8px;
      padding: 8px;
      color: #9aa0b0;
      text-align: center;
      width: 100%;
      max-width: 220px;
    }
    
    .item img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 6px;
      display: block;
    }
    
    .item .title {
      font-size: 13px;
      color: #111;
      margin-top: 8px;
    }
    
    .item .price {
      font-weight: 700;
      margin-top: 6px;
      color: #000;
    }
    
    .contact {
      width: 94%;
      margin: 14px auto;
      padding: 12px;
      border-radius: 8px;
      background: linear-gradient(90deg, rgba(123, 97, 255, 0.03), rgba(0, 194, 255, 0.02));
      text-align: center;
    }
    
    .email-input {
      width: 100%;
      max-width: 300px;
      padding: 8px;
      margin: 8px auto 0;
      border-radius: 6px;
      border: 1px solid rgba(0, 0, 0, 0.06);
      min-height: 20px;
      display: block;
    }
    
    .email-input[contenteditable="true"]:empty:before {
      content: attr(data-placeholder);
      color: #999;
      font-style: italic;
    }
    
    .email-input[contenteditable="true"]:focus:before {
      content: none;
    }
    
    .fake-submit {
      display: inline-block;
      padding: 8px 10px;
      border-radius: 6px;
      background: #5a4fcf;
      color: #fff;
      margin: 8px auto 0;
      cursor: pointer;
      font-weight: 600;
    }
    
    a:focus, button:focus, input:focus, textarea:focus, [tabindex]:focus {
      outline: 2px solid #7b61ff;
      outline-offset: 2px;
    }
  </style>
</head>

<body>
  <div class="topbar" tabindex="47">
    <div class="header-title" aria-hidden="true">
      <span class="title-blindfolded">blindfolded</span>
      <span class="title-browsing">Browsing</span>
    </div>
  </div>
  <div class="hero" tabindex="12">
    <img src="https://pisssssscsum.photos/1200/380?blur=5">
    <div class="hero-title">Summer tech. Fresh deals.</div>
  </div>
  <div class="cats" tabindex="3">
    <div class="cat" tabindex="28">Smartphones</div>
    <div class="cat" tabindex="15">Laptops</div>
    <div class="cat" tabindex="41">Audio</div>
    <div class="cat" tabindex="6">Home</div>
    <div class="cat" tabindex="33">Fitness</div>
  </div>
  <div tabindex="19">
    <div class="product-section" tabindex="52">
      <div class="row-title">Trending now</div>
      <div class="grid" tabindex="8">
        <div class="item" tabindex="37">
          <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp">
          <div class="title" tabindex="24">Essence Mascara Lash Princess</div>
          <div class="price" tabindex="45">₹799</div>
          <div class="fake-submit" tabindex="2">Add</div>
        </div>
        <div class="item" tabindex="16">
          <img src="https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp">
          <div class="title" tabindex="39">Eyeshadow Palette with Mirror</div>
          <div class="price" tabindex="7">₹1599</div>
          <div class="fake-submit" tabindex="31">Add</div>
        </div>
        <div class="item" tabindex="44">
          <img src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp">
          <div class="title" tabindex="18">Powder Canister</div>
          <div class="price" tabindex="26">₹1199</div>
          <div class="fake-submit" tabindex="9">Add</div>
        </div>
      </div>
    </div>
    <div class="contact" tabindex="35">
      <div style="font-weight:700;" tabindex="13">Join our newsletter</div>
      <div class="email-input" contenteditable="true" data-placeholder="Enter your email">my_email</div>
      <div class="fake-submit" tabindex="21">Click Me</div>
    </div>
  </div>
</body>
</html>`,
    `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <style>
    * { 
      box-sizing: border-box; 
      margin: 0; 
      padding: 0; 
    }
    
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: linear-gradient(180deg, #fbfdff 0%, #ffffff 60%);
      color: #222;
      -webkit-font-smoothing: antialiased;
    }

    .topbar {
      width: 100%;
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(90deg, #0a0e1a, #1a1f2e);
      border-bottom: 2px solid rgba(123, 97, 255, 0.3);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .header-title {
      text-align: center;
      font-size: 36px;
      font-weight: 800;
      margin: 0;
    }

    .title-blindfolded {
      background: linear-gradient(90deg, #00c2ff, #7b61ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }

    .title-browsing {
      background: linear-gradient(90deg, #7b61ff, #00c2ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
    }

    .container {
      max-width: 980px;
      margin: 0 auto;
      padding: 28px;
    }

    .hero {
      display: flex;
      gap: 40px;
      background: #fff;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 10px 24px rgba(20,40,80,0.06);
      align-items: flex-start;
    }

    .col {
      flex: 1 1 50%;
    }

    .product-title {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 12px;
      color: #111;
      line-height: 1.2;
    }

    .product-price {
      font-size: 28px;
      font-weight: 800;
      color: #7b61ff;
      margin-bottom: 16px;
    }

    .product-description {
      font-size: 16px;
      margin-bottom: 20px;
      color: #666;
      line-height: 1.6;
    }

    .product-rating {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 20px;
    }

    .stars {
      color: #ffc107;
      font-size: 18px;
    }

    .rating-text {
      font-size: 14px;
      color: #666;
    }

    .quantity-selector {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 24px;
    }

    .option-label {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 8px;
      display: block;
    }

    .quantity-btn {
      width: 40px;
      height: 40px;
      border: 2px solid #e0e0e0;
      background: #fff;
      color: #333;
      border-radius: 6px;
      cursor: pointer;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .quantity-input {
      width: 60px;
      height: 40px;
      border: 2px solid #e0e0e0;
      border-radius: 6px;
      text-align: center;
      font-size: 16px;
    }

    .cta-buttons {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
    }

    .btn-primary {
      flex: 1;
      padding: 14px 24px;
      border-radius: 8px;
      color: #ffffff;
      background-color: #ff6b6b;
      font-weight: 600;
      text-align: center;
      border: none;
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(123, 97, 255, 0.3);
    }

    .media {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
    }

    .img-wrap {
      width: 350px;
      height: 350px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(12,24,60,0.06);
      border: 0.8px solid #7b61ff;
    }

    .img-wrap img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .product-image {
      display: block;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }

    .image-caption {
      width: 100%;
      text-align: center;
      margin-top: 6px;
      font-size: 13px;
      color: #444;
    }

    @media (max-width: 860px) {
      .hero { 
        flex-direction: column; 
        align-items: stretch; 
      }
    }
    
    @media (max-width: 520px) {
      .img-wrap { 
        width: 100%; 
        max-width: 350px;
        height: 350px;
      }
    }
  </style>
</head>
<body>
  <div class="topbar" tabindex="47">
    <div class="header-title" aria-hidden="true">
      <span class="title-blindfolded">blindfolded</span>
      <span class="title-browsing"> Browsing</span>
    </div>
  </div>
  <div class="container" tabindex="83">
    <div class="hero" tabindex="12">
      <div class="col" tabindex="91">
        <div class="product-title" tabindex="3">Premium Wireless Headphones</div>
        <div class="product-rating" tabindex="67">
          <div class="stars">★★★★★</div>
          <div class="rating-text">(4.8) • 1,247 reviews</div>
        </div>
        <div class="product-price" tabindex="29">$299.99</div>
        <div class="product-description" tabindex="156">
          Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day listening.
        </div>
        <div class="quantity-selector" tabindex="34">
          <div class="option-label">Quantity</div>
          <div class="quantity-btn" tabindex="56">-</div>
          <div class="quantity-input" tabindex="78">1</div>
          <div class="quantity-btn" tabindex="90">+</div>
        </div>
        <div class="cta-buttons" tabindex="123">
          <div class="btn-primary" tabindex="145">Click Me</div>
        </div>
      </div>
      <div class="col media" tabindex="198">
        <div class="img-wrap" tabindex="15">
          <img class="product-image" src="https://imageplash.com/phodddddddddcbweiucgweiucgweiucgwiugco-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=example" tabindex="201">
        </div>
        <div class="image-caption" tabindex="56">
          Premium Wireless Headphones - Black
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`,
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (snippet: string, index: number) => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-128px)] w-full overflow-hidden bg-cosmic-gradient no-scrollbar">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[20%] bg-[conic-gradient(from_0deg,hsl(200_60%_45%),transparent_30%,hsl(320_50%_55%),transparent_60%,hsl(280_45%_50%),transparent_90%)] opacity-15 blur-3xl animate-rotate-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,hsl(200_50%_12%_/_0.25)_0%,transparent_70%)]" />
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-primary/12 blur-3xl animate-float" />
        <div className="absolute right-[-12%] bottom-[-12%] h-96 w-96 rounded-full bg-accent/12 blur-3xl animate-float" style={{ animationDelay: "0.8s" }} />
      </div>

      <div className="relative mx-auto max-w-none px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="font-cyber font-black leading-tight">
            <span className="block text-sm md:text-base text-transparent bg-clip-text bg-neon-gradient tracking-[0.15em]">BLINDFOLDED BROWSING</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-accent to-text-secondary">Accessibility Challenge</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground">Copy a snippet, build it, and optimize it for accessibility.</p>
        </div>



        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mb-12">
          {htmlSnippets.map((snippet, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-2xl bg-background/60 backdrop-blur-sm shadow-accent-glow p-4 flex flex-col hover:border-primary/40 transition min-h-56 md:min-h-60"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm md:text-base font-cyber font-semibold text-transparent bg-clip-text bg-neon-gradient">Challenge {index + 1}</span>
              </div>
              <div className="relative flex-1">
                <pre className="h-full min-h-40 md:min-h-48 max-h-96 overflow-y-auto text-sm bg-slate-900/60 border border-primary/20 p-3 rounded-md text-muted-foreground">
                  <code>{snippet}</code>
                </pre>
                <button
                  onClick={() => handleCopy(snippet, index)}
                  aria-label="Copy code snippet"
                  className="absolute top-2 right-2 inline-flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-r from-primary to-accent text-background shadow-accent-glow hover:opacity-90 transition"
                  title={copiedIndex === index ? "Copied" : "Copy"}
                >
                  {copiedIndex === index ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  <span className="sr-only">{copiedIndex === index ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div
          role="note"
          aria-label="Important note about AI tool usage"
          className="mb-8 rounded-xl border border-red-500/30 bg-red-900/20 px-4 py-3 text-red-200"
        >
          <p className="text-sm md:text-base">
            <span className="font-semibold">Important:</span> Use of AI tools is strictly discouraged. Participants found using AI may face disqualification.
          </p>
        </div>

        {/* Instructions */}
        <div className="w-full text-base md:text-lg space-y-4 bg-background/60 backdrop-blur-sm border border-primary/20 rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-cyber font-black text-transparent bg-clip-text bg-neon-gradient">Instructions</h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground">Follow these steps to build, test, and improve your snippet for accessibility.</p>
          <ol className="list-decimal pl-6 space-y-3 marker:text-accent marker:font-semibold">
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Choose a Snippet</strong>
              <ul className="list-disc pl-6">
                <li>Choose one of the three available HTML snippets.</li>
              </ul>
            </li>
            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Set Up Your Coding Environment</strong>
              <ul className="list-disc pl-6">
                <li>
                  Visit <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-accent">CodeSandbox</a>.
                </li>
                <li>Sign up for a free account if you don’t already have one.</li>
                <li>
                  Create a new project:
                  <ul className="list-disc pl-6">
                    <li>Select <b>HTML + CSS</b> as the project type.</li>
                    <li>Give your project a name.</li>
                    <li>Set runtime as Sandbox.</li>
                    <li>Click Create.</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Add and Run Your HTML Page</strong>
              <ul className="list-disc pl-6">
                <li>Open the <code>index.html</code> file in your project.</li>
                <li>Copy and paste the entire HTML snippet you chose earlier.</li>
                <li>Save the file.</li>
                <li>
                  Go to the Preview tab, copy the preview URL, and open it in a
                  new browser tab.
                </li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Generate the Accessibility Report</strong>
              <ul className="list-disc pl-6">
                <li>Right-click anywhere on your page and select <b>Inspect Element</b>.</li>
                <li>Go to the <b>Lighthouse</b> tab.</li>
                <li>
                  Configure Lighthouse:
                  <ul className="list-disc pl-6">
                    <li>Mode: Navigation</li>
                    <li>Device: Desktop</li>
                    <li>Categories: Accessibility</li>
                  </ul>
                </li>
                <li>Click <b>Analyze Page Load</b> and review your Accessibility Report.</li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Improve Accessibility</strong>
              <ul className="list-disc pl-6">
                <li>Edit the HTML/CSS to enhance accessibility.</li>
                <li>Do not change the basic layout/features.</li>
                <li>Achieve at least a <b>95% accessibility score</b>.</li>
              </ul>
            </li>

            <li className="bg-background/70 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-shadow hover:shadow-accent-glow">
              <strong>Submit for Review</strong>
              <ul className="list-disc pl-6">
                <li>Raise your hand and inform a volunteer once you’re done.</li>
                <li>
                  Volunteers will also perform a manual accessibility check.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityChallenge;
