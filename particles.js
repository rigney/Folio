var options = {"particles":{"number":{"value":20,"density":{"enable":true,"value_area":600}},
"color":{"value":"#FB7070"},
"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":300,"height":300}},
"opacity":{"value":.75,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.4,"sync":false}},
"size":{"value":125,"random":true,"anim":{"enable":false,"speed":20,"size_min":100,"sync":false}},
"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":false,"rotateX":10,"rotateY":10}}},
"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":150,"duration":.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
"retina_detect":false};
particlesJS("particle", options);