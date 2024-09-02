import Typewriter from 'typewriter-effect';

const LetterComponent = () => {
  // Replace newlines with HTML <br> tags and wrap paragraphs with <p> tags
  const formatLetter = (text:string) => {
    // Convert newlines into <br> tags for line breaks
    const linesWithBreaks = text.replace(/\n/g, '<br>');
    // Wrap paragraphs in <p> tags
    const paragraphs = linesWithBreaks.split('<br><br>').map(p => `<p>${p}</p>`).join('');
    return paragraphs;
  };

  const letter = `
Dear Visitors,

Welcome to our immersive virtual tour experience of Vietnam!

As the developer behind this project, I'm thrilled to invite you on a journey through the diverse and breathtaking landscapes of Vietnam, a country rich in culture, history, and natural beauty. This website has been designed with one goal in mind: to bring the essence of Vietnam to you, wherever you may be.

Our Vision

Vietnam is a land of wonders, from the bustling streets of Hanoi to the serene waters of Ha Long Bay, the ancient town of Hoi An to the vibrant Mekong Delta. Each region tells a story, and through this virtual experience, we aim to capture the spirit of these places, making them accessible to everyone. Whether you're planning a future visit or simply exploring out of curiosity, our platform offers an engaging and informative way to experience Vietnam like never before.

What to Expect

Our virtual tours are crafted to be more than just a digital walkthrough. We've integrated high-resolution visuals, interactive elements, and insightful content to make your exploration as vivid and real as possible. You can wander through famous landmarks, explore hidden gems, and learn about the history and culture that make each location unique. It’s more than just seeing; it’s about feeling the vibrancy of Vietnam.

Behind the Scenes

This website is built using cutting-edge web technologies, including TypeScript, React, and Node.js, to ensure a seamless and responsive experience across all devices. We’ve poured our hearts into creating a platform that is not only visually stunning but also user-friendly and accessible.

A Special Invitation

Whether you have a personal connection to Vietnam, a curiosity about its culture, or a passion for travel, I invite you to dive into this virtual adventure. Feel free to explore at your own pace, revisit your favorite spots, and share the experience with others.

Thank you for visiting our site. We hope it inspires you, brings you joy, and perhaps, even plants the seed for a future journey to Vietnam.

Warm regards,

Hai Doan Long Trinh
Developer
Vietnam Virtual Tour Experience
`;

  const formattedLetter = formatLetter(letter);

  return (
    <div style={{ fontFamily: 'monospace', fontSize: '16px', lineHeight: '1.5' }}>
      <Typewriter
        options={{
          delay: 1, // Fastest delay to simulate typing
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(formattedLetter)
            .callFunction(() => {
              console.log('Letter typed out!');
            })
            .start();
        }}
      />
    </div>
  );
};

export default LetterComponent;
