$(document).ready(function () {
  $("#new_comment_button").click(function (event) {
    event.preventDefault()
    $("body").append(
      $("<form/>", {
        id: 'new_comment',
        style: 'display: inline-block;'
      }).append(
        $("<textarea/>", {
          id: "new_comment",
          placeholder: 'Your comment here...'
        }), $("<br/>"), $("<input/>", {
          type: 'text',
          id: 'authorName',
          placeholder: 'author'
        }), $("<input/>", {
          type: 'submit',
          value: 'Submit Comment'
        })
      )
    )
  $("form#new_comment").css("display", "default");
  $("#new_comment_button").css("display", "none");
  })
})