function(instance, properties) {

    var btn = $('<button></button>');
    
    setText(btn, properties); 
    setSize(btn, properties);
	setFont(btn, properties);
    setBorder(btn, properties);
	setBackground(btn, properties);
          
	instance.canvas.append(btn);

}


function setText(btn, properties) {
	btn.text(properties.button_text);    
}

function setSize(btn, properties) {
    
    btn.css("width", properties.bubble.width);
    btn.css("height", properties.bubble.height);    
    
}

function setFont(btn, properties) {
    btn.css("text-align", "center");
    btn.css("text-decoration", properties.text_decoration);
    btn.css("font-size", properties.font_size);
    btn.css("font-family", properties.font_family);
    btn.css("letter-spacing", properties.letter_spacing);
    btn.css("color", properties.font_color);   
    
    if (properties.font_style === "bold") {
    	btn.css("font-weight", "bold");
    	btn.css("font-style", "normal");  
        
    } else if (properties.font_style === "italic") {
    	btn.css("font-style", "italic");  
        btn.css("font-weight", "normal");     
        
    } else {
        btn.css("font-weight", "normal");
    	btn.css("font-style", "normal");  
    } 
    
}

function setBorder(btn, properties) {
    
    btn.css("border-style", properties.border_style);    
    btn.css("border-width", properties.border_width);
    btn.css("border-radius", properties.border_radius);
    btn.css("border-color", properties.border_color);  
    
}

function setBackground(btn, properties) {

    if (properties.background_style === "solid") {
        btn.css("background", properties.background_color_1);        

    } else if (properties.background_style === "linear gradient") {
        btn.css("background",'linear-gradient('
                + properties.gradient_direction + ','
                + properties.background_color_1 + ','
                + properties.background_color_2 + ')');

    }
      
}

