// bypass same origin policy on *.mcpt.eu
document.domain = "mcpt.eu";

jQuery("iframe.dynmap").load(function(el) {
    this.contentWindow.$('head').append('<link rel="stylesheet" type="text/css" href="//panel.mcpt.eu/css/dynmap/clean.css">');
});
