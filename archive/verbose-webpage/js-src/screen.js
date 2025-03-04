var scrW = screen.width;
var scrH = screen.height;

log('Screen', scrW + 'x' + scrH + ' ' +screen.orientation.type);

if (screen.orientation){
	screen.orientation.addEventListener('change', function (){
		log('Screen', screen.orientation.type);
	});
}
