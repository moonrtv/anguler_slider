function MySlider($scope){
			var i = 0;

			var length = document.getElementById("slide-show").children.length;
			$scope.next = function() {

				i++; 
				alert("next="+i+" length="+length);
				if (i < length){
					var left = i * 100;
					document.getElementById("slide-show").style.marginLeft = "-" + left + "%";
					document.getElementById("prev").style.visibility = "visible";
					if (i === (length - 1)) {document.getElementById("next").style.visibility = "hidden";}	
				}
			}

			$scope.prev = function() {
				i--;
				alert("prev="+i);
				if (i < length){
					var left = i * 100;
					document.getElementById("slide-show").style.marginLeft = "-" + left + "%";
					document.getElementById("next").style.visibility = "visible";
					 // alert("prev="+i);
					if (i === 0) {document.getElementById("prev").style.visibility = "hidden";}
				}
			}
		}