window.addEventListener("load", solve);

function solve() {
  let titleField = document.getElementById('post-title');
  let categoryField = document.getElementById('post-category');
  let contentField = document.getElementById('post-content');
  let publishBtn = document.getElementById('publish-btn');
  let reviewField = document.getElementById('review-list');
  let uploadedField = document.getElementById('published-list');
  let clearBtn = document.getElementById('clear-btn');

  publishBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let info = {
      title: titleField.value,
      category: categoryField.value,
      content: contentField.value
    };

    if (validate(info)) {

      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';

      createAndAppendPreview(info);

      function createAndAppendPreview(info) {
        let li = document.createElement('li');
        li.setAttribute('class', 'rpost');
        reviewField.appendChild(li);

        let article = document.createElement('article');
        li.appendChild(article);

        let h4 = document.createElement('h4');
        h4.innerText = info.title;
        article.appendChild(h4);


        let firstParagraph = document.createElement('p');
        firstParagraph.innerText = `Category: ${info.category}`;
        article.appendChild(firstParagraph);

        let secondParagraph = document.createElement("p");
        secondParagraph.innerText = `Content: ${info.content}`;
        article.appendChild(secondParagraph);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'action-btn edit');
        editBtn.innerText = 'Edit';
        li.appendChild(editBtn);
        editBtn.addEventListener('click', () => {
          titleField.value = info.title;
          categoryField.value = info.category;
          contentField.value = info.content;

          li.remove();
        });

        let approveBtn = document.createElement('button');
        approveBtn.setAttribute('class', 'action-btn approve');
        approveBtn.innerText = 'Approve';
        li.appendChild(approveBtn);
        approveBtn.addEventListener('click', () => {
          li.remove();
          editBtn.remove();
          approveBtn.remove();
          uploadedField.appendChild(li);
        });

        clearBtn.addEventListener('click', () => {
          li.remove();
        })
      }
    }

    function validate(info) {
      if (info.title == ''
        || info.category == ''
        || info.content == '') {
        return false;
      }

      return true;
    }
  })
}
