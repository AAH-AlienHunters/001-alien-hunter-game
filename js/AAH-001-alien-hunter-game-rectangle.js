function Rectangle(id,x,y,width,height){
	this.id=id;
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;

	//drawFrame(context,colour)
	this.drawFrame=drawFrame;
	//drawFill(context,colour)
	this.drawFill=drawFill;
	//draw(context,bcolour,fcolour)
	this.draw=draw;
	//drawImg(context, img, drawRect, frameRect)
	this.drawImg=drawImg;
	//intersect(otherRect)
	this.intersect=intersect;

	function drawFrame(context,colour){
		context.strokeStyle=colour;
		context.strokeRect(this.x,this.y,this.width, this.height);
	}

	function drawFill(context,colour){
		context.fillStyle=colour;
		context.fillRect(this.x,this.y,this.width, this.height);
	}

	function draw(context,bordercolour,fillcolour){
		drawFill(context,fillcolour);
		drawFrame(context,bordecolour);
		
		
	}
	
	function drawImg(context, img, drawRect, frameRect){
		if(typeof(frameRect) == "object"){
			context.drawImage(img, frameRect.x,frameRect.y,frameRect.width,frameRect.height,drawRect.x,drawRect.y,drawRect.width,drawRect.height);
		}else{
			context.drawImage(img,drawRect.x,drawRect.y,drawRect.width,drawRect.height);
		}
	}
	
	
	function intersect(otherRect){
		var a={'x':this.x, 'y':this.y,'w':this.width,'h':this.height};
		var b={'x':otherRect.x,'y':otherRect.y,'w':otherRect.width,'h':otherRect.height};
		//test if b is smaller than or equal in size to a
		if((b['x']>=a['x']) && (b['x']<=(a['x']+a['w']))){
			
			if((b['y']>=a['y']) && (b['y']<=(a['y']+a['h']))){
				//top left corner intersection
				return true;
			}else if(((b['y']+b['h'])>=a['y']) && ((b['y']+b['h'])<=(a['x']+a['w']))){
				//bottom left corner intersection
				return true;
			}
				
			
		}else if(((b['x']+b['w'])>=a['x']) && ((b['x']+b['w'])<=(a['x']+a['w']))){
			
			if((b['y']>=a['y']) && (b['y']<=(a['y']+a['h']))){
				//top right corner intersection
				return true;
			}else if(((b['y']+b['h'])>=a['y']) && ((b['y']+b['h'])<=(a['x']+a['w']))){
				//bottom right corner intersection
				return true;
			}
			//if a is smaller in size or equal to b
		}else if((a['x']>=b['x']) && (a['x']<=(b['x']+b['w']))){

			if((a['y']>=b['y']) && (a['y']<=(b['y']+b['h']))){
				//top left corner intersection
				return true;
			}else if(((a['y']+a['h'])>=b['y']) && ((a['y']+a['h'])<=(b['x']+b['w']))){
				//bottom left corner intersection
				return true;
			}

		}else if(((a['x']+a['w'])>=b['x']) && ((a['x']+a['w'])<=(b['x']+b['w']))){
			
			if((a['y']>=b['y']) && (a['y']<=(b['y']+b['h']))){
				//top right corner intersection
				return true;
			}else if(((a['y']+a['h'])>=b['y']) && ((a['y']+a['h'])<=(b['x']+b['w']))){
				//bottom right corner intersection
				return true;
			}
			
		}
		return false;
	}


}