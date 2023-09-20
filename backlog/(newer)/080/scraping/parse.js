const parseToJson = function() {
    let result = { items: []};
    let item, course, nes, li;
    let root = document.getElementById('program-courses');
    root.querySelectorAll('.program-table-accordion')
        .forEach(function(el) {
            item = {};
            item.level = el.querySelector('h4').innerText;
            item.courses = [];

            el.querySelectorAll('.accordion-item')
              .forEach(function(ael) {
                course = {};
                course.courseCode = ael.querySelector('.program-course-code').innerText;
                course.courseTitle = ael.querySelector('.program-course-title').innerText

                nes = ael.nextElementSibling;
                course.meta = []
                nes.querySelector('.program-course-meta').querySelectorAll('li').forEach(function (li) {
                    let key = li.firstElementChild.innerText;
                    let value = li.firstElementChild.nextSibling.wholeText;
                    course.meta.push({key, value});
                });
                course.description = nes.querySelector('.program-course-description').firstElementChild.innerText;

                item.courses.push(course);
              });

            result.items.push(item);
        });
    return result;
}
const export2txt = function (fileName) {
    // https://stackoverflow.com/a/60377870/191885
    const originalData = parseToJson();
  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
      type: "text/json"
    }));
    a.setAttribute("download", fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  