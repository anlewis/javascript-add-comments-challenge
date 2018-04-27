$(document).ready(function () {
  $("#new_comment_button").click(function (event) {
    event.preventDefault()

    $("body").append(
      $("<form/>", {
        id: 'new_comment',
        style: 'display: inline-block;'
      }).append(
        $("<textarea/>", {
          id: "comment",
          placeholder: 'Your comment here...'
        }), $("<br/>"), $("<input/>", {
          type: 'text',
          id: 'authorName',
          placeholder: 'author'
        }), $("<input/>", {
          id: 'create_comment_button',
          type: 'submit',
          value: 'Create Comment'
        })
      )
    )

    $("form#new_comment").css("display", "inline-block");
    $("#new_comment_button").css("display", "none");  
  })

  $(document).on('click', '#create_comment_button', function (event) {
    event.preventDefault()

    let comment = $("textarea#comment").val();
    let author = $("input#authorName").val();

    if (comment !== '') {
      $("ul").append(
        $("<li/>").text(comment).append(
          $("<span/>", {
            class: "author"
          }).text(author)
        )
      )
    }

    $("form#new_comment").remove();
    $("#new_comment_button").css("display", "inline-block");
  })
})