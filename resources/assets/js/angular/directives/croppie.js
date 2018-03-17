home.directive('croppie', croppie);

function croppie () {
  return {
    scope: {

    },
    template: `
      <div class="upload-demo">
        <label for="upload">
          <span class="btn btn-primary">Upload</span></label>
          <input
            class="sr-only"
            type="file"
            id="upload"
            value="Choose a file"
            accept="image/*">

        <div id="upload-demo"></div>
      </div>
    `,
    restrict: 'E',
    link: postLink
  };

  function postLink() {
    var $uploadCrop;

		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();

	            reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
	            	$uploadCrop.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            	});

	            }

	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}

		$uploadCrop = $('#upload-demo').croppie({
			viewport: {
				width: 100,
				height: 100,
				type: 'square'
			},
      boundary: {
        width: 300,
        height: 300
      },
			enableExif: true
		});

		$('#upload').on('change', function () { readFile(this); });
  }
}
