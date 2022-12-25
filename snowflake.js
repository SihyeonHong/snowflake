/* source: https://youtu.be/3CuUmy7jX6k */

const MIN_DURATION = 10; // minimum animation delay duration is 10 seconds

const body = document.querySelector("body");

for(let i=0; i<100; i++){
	setTimeout(makeSnowflake, 500*i);
}

function makeSnowflake(){
	const snowflake = document.createElement("i");
	const delay = Math.random() * 10;
	const initialOpercity = Math.random(); // 원래 불투명도 수치는 0~1. 
	const duration = Math.random() * 20 + MIN_DURATION;

	snowflake.classList.add("fa-regular"); 
	snowflake.classList.add("fa-snowflake");
	snowflake.style.left = `${Math.random() * window.screen.width}px`;
	snowflake.style.animationDelay = `${delay}s`;
	snowflake.style.opacity = initialOpercity;
	snowflake.style.animation = `fall ${duration}s linear`;

	body.appendChild(snowflake);

	setTimeout(()=>{
		body.removeChild(snowflake);
		makeSnowflake();
	}, (duration+delay) * 1000);
}