$(function () {
  console.log('sanity check');

  var $rolls = $('#role')

  var RolePreview = {};

  $.ajax({
    url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data[0])
      for (var i = 0; i < data.length; i++) {
        var roleData = data[i];
        var roleImg = roleData.img
        $rolls.append("<option          value='"+roleData.title+"'>"+roleData.title+"</option>"
        );

        RolePreview[roleData.title] = roleImg;

        RolePreview.name = 'blah'
        RolePreview["name"] = 'Name'
        //
        // <option data-name="Thankdata-image="./assets/images/tank.jpg" value="Tank">Tank</option>
        //
      }
      $('#role').on('change', function (e) {
        var image = RolePreview[$(this).val()];
        console.log('called')
        console.log(RolePreview);
        $('#role-preview')[0].src = image;
      })
      //

      $('[type="submit"]').click(function(e){
        e.preventDefault()
        $.ajax({
          method: 'POST',
          url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/users',
          data: {
            firstName: $('[name="firstName"]').val(),
            lastName: $('[name="lastName"]').val(),
            role: $('[name="role"]').val()
          }
        }).done( function () {
          var $status = $('.save-status')
          $status.fadeIn(500)
          removeStatus($status)
        }).fail(function() {
          var $status = $('.failed-status')
          $status.fadeIn(500)
          removeStatus($status);
        })
      })

      function removeStatus($status) {
        setTimeout(function() {
          $status.fadeOut(500);
        }, 2000);
      }

      // HTML classes and ids should be dashes
      // therefore you can use dashes all throughout your CSS
      // JS variables are CamelCased
      // ruby variables are snake_cased
      // CoffeeScript variables are either or, just be consistent. Pick one.

      // when you do single quotes every character is interpreted literally
      // 'one\ntwo'

      // but when you use double quotes special charactesr are interpreted

       // "one\ntwo"
       // "one
      //   two"

      // loop over your data
      // append an <option> tag with a value of the title

    }

    // your role on change
    // when the value changes
    // grab the "data-image"(the url) from the selected option

    // $('img').attr('src', newImageSrc)
  })

  $('form').on('submit', function (event) {
    event.preventDefault()
    console.log(event);


  })
})
