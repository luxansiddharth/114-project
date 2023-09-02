mustacheX=0;
 mustacheY=0;
  function preload()
   {
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');

    } 
    function setup() 
    { 
        canvas=createCanvas(300, 300);
         canvas.center();
          video=createCapture(300, 300);
           video.size(300, 300);
            video.hide(); 
            poseNet=ml5.poseNet(video,modelLoaded);
             poseNet.on('pose',gotPoses);
             } function modelLoaded() { console.log('poseNet is initialized');
             } function gotPoses(results) 
             { if(results.length > 0) 
                { console.log(results); 
                    mustacheX=results[0].pose.nose.x-30; 
                    mustacheY=results[0].pose.nose.y-10;
                 } } function draw() { image(video,0, 0, 300, 300);
                     image(mustache, mustacheX, mustacheY, 60, 45);
                     } function take_snapshot()
                      { save('myfilter.png');
                     }