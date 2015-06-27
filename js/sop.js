// bypass same origin policy on *.minecraft.pt
document.domain = "minecraft.pt";

jQuery("iframe").load(function(el) {
    this.contentWindow.$('head').append('<link rel="stylesheet" type="text/css" href="//panel.minecraft.pt/css/dynmap/clean.css">');
});
