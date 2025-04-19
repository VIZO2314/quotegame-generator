const quotes = [
    {
      text: `"War... war never changes."`,
      game: "Fallout",
      image: "https://images6.alphacoders.com/656/thumb-1920-656605.jpg"
    },
    {
      text: "The right man in the wrong place can make all the difference in the world." ,
      game: "Half Life 2",
      image: "https://cdn.mos.cms.futurecdn.net/FXhJXqnvnXR3PRXMSKUbHX-1200-80.jpg.webp"
    },
    {
        text: "Wanting something does not give you the right to have it." ,
        game: "Assassin's Creed 2",
        image: "https://cdn.mos.cms.futurecdn.net/2i7CchFPdVtYk5DWiKPwvQ-1200-80.jpg.webp"
    },
    {
      text: `"It's dangerous to go alone! Take this."`,
      game: "The Legend of Zelda",
      image: "https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_Hub_TheLegendOfZelda_ToTK.jpg"
    },
    {
      text: `"Do a barrel roll!"`,
      game: "Star Fox 64",
      image: "https://s.yimg.com/ny/api/res/1.2/86BXtDC6IJJINIiYwyJ.iw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MjA-/https://o.aolcdn.com/hss/storage/midas/3596c8b4a1275532467638fdceb059f3/203584138/starfox-ed.jpg"
    }
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteData = quotes[randomIndex];
  
    const quoteEl = document.getElementById("quote");
    const imageEl = document.getElementById("gameImage");
  
    quoteEl.innerText = `${quoteData.text} \n- ${quoteData.game}`;
    imageEl.src = quoteData.image;
    imageEl.style.display = "block";
  }
  