function(instance, properties, context) {
    
	var btn = $(instance.canvas.children()[0]);

    var colors = properties.popup_color.replace("rgba(","").replace(")","").split(",");
    var popupColor = button_style.RGBToHex(colors[0].trim(), colors[1].trim(), colors[2].trim());
    btn.attr("popup-color", popupColor);


    btn.attr("product-id", properties.ic_product);
    btn.attr("product-quantity", properties.ic_product_quantity);
    
    button_style.setText(btn, properties);
    button_style.setFont(btn, properties);
    button_style.setBorder(btn,properties);
    button_style.setBackground(btn, properties);
    button_style.setSize(btn, properties);
        
}