function next_video() {
	// Get random number between 1 and 10. This will be used for generating a random video.
	var le_vid_number = Math.floor(Math.random() * 10) + 1;

	console.log("Number is: " + le_vid_number);

	switch(le_vid_number) {
		case 1:
			// DONE
			document.title = "NO DEAL MAN";
			header.innerHTML = "NO DEAL MAN, NO DEAL!";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/Ol2DedEhOGI\"></iframe>";
			break;

		case 2:
			// DONE
			document.title = "BLACK WOMEN INTERVIEW";
			header.innerHTML = "WHAT, CAN'T A BLACK WOMEN BE BORN IN AGE?!";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/wX1bL-NE74U\"></iframe>";
			break;

		case 3:
			// DONE
			document.title = "AIRPORT SECURITY";
			header.innerHTML = "DO YOU HAVE A BOMB IN YOUR LUGGAGE?";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/Dfg5tZeGmsI\"></iframe>";
			break;

		case 4:
			// DONE
			document.title = "NEW HIRE";
			header.innerHTML = "NEW GUY.";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/W8aAGYte0tc\"></iframe>";
			break;

		case 5:
			// DONE
			document.title = "DR. PHIL";
			header.innerHTML = "DR. PHIL BE MEAN YO.";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/iVgKU0tefFs\"></iframe>";
			break;

		case 6:
			// DONE
			document.title = "JEOPARDY";
			header.innerHTML = "I LOST ON JEOPARDY, OOOOOO...";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/kL7NNLamR6w\"></iframe>";
			break;
		case 7:
			// DONE
			document.title = "¿¿¿¿¿EL TACO BELL????";
			header.innerHTML = "IN MEXICO...";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/jYHHCRm-R-U\"></iframe>";
			break;

		case 8:
			// DONE
			document.title = "NORTH KOREA BEST COUNTRY";
			header.innerHTML = "VERY NICE, NORTH KOREA VERY NICE.";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/F1xVtL_K0xE\"></iframe>";
			break;

		case 9:
			// DONE
			document.title = "WALMART GREETER";
			header.innerHTML = "OOO FABULOUS, VERY NICE!";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/0ImQf7UCceE\"></iframe>";
			break;

		case 10:
			// DONE
			document.title = "DRIVING TEST";
			header.innerHTML = "OH GOD.";
			video_frame.innerHTML = "<iframe width=\"854\" height=\"475\"src=\"https://www.youtube.com/embed/VGZN_3Prcws\"></iframe>";
			break;
	}

}