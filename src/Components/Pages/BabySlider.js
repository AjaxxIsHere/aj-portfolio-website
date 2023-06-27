import React, { useEffect } from 'react';
import '../../Styles/BabySlider.css';
import ProfilePic from '../../Images/ProfilePic.jpg';

function BabySlider() {
  useEffect(() => {
    // Link me to your sonicSlide in action!

    // Version 28.0

    // Shuffle elements on load
    // https://css-tricks.com/snippets/jquery/shuffle-dom-elements/

    // Automatic Rotation
    // setInterval(function() {
    //   $('.controls--modifier .next').trigger('click');
    // }, 10000);

    babySonicSlide(
      'baby',
      '.baby-controls',
      '.baby-pagination',
      '.baby-item'
    );

    function babySonicSlide(list, listController, listPagination, listElement) {
      // Variable Setup
      // =================
      var prev = listController + ' .prev';
      var next = listController + ' .next';

      var pagination = listPagination;
      var paginationItem = pagination + ' span';

      var element = listElement;

      var activeClass = 'active';
      var activeElement = element + '.' + activeClass;

      // Setup Controls
      // =================
      document.querySelector(listController).innerHTML =
        '<span class="prev control"></span>' +
        '<span class="next control"></span>';

      // Setup Pagination
      // =================
      if (!document.querySelector(pagination + ' span')) {
        Array.from(document.querySelectorAll(element)).forEach(() => {
          document.querySelector(pagination).innerHTML += '<span></span>';
        });
      }

      // Preparations
      // =================
      document.querySelector(element + ':first-child').classList.add(activeClass);
      document.querySelector(paginationItem + ':first-child').classList.add(activeClass);

      // Actions
      // =================
      // Previous Click
      // =================
      document.querySelector(prev).addEventListener('click', function () {
        if (document.querySelector(element + ':first-child').classList.contains(activeClass)) {
          document.querySelector(activeElement).classList.remove(activeClass);
          document.querySelector(element + ':last-child').classList.add(activeClass);
        } else {
          var previousSibling = document.querySelector(activeElement).previousElementSibling;
          if (previousSibling) {
            document.querySelector(activeElement).classList.remove(activeClass);
            previousSibling.classList.add(activeClass);
          }
        }
        coordinatePagination();
      });

      // Next Click
      // =================
      document.querySelector(next).addEventListener('click', function () {
        if (document.querySelector(element + ':last-child').classList.contains(activeClass)) {
          document.querySelector(activeElement).classList.remove(activeClass);
          document.querySelector(element + ':first-child').classList.add(activeClass);
        } else {
          var nextSibling = document.querySelector(activeElement).nextElementSibling;
          if (nextSibling) {
            document.querySelector(activeElement).classList.remove(activeClass);
            nextSibling.classList.add(activeClass);
          }
        }
        coordinatePagination();
      });

      // Pagination Click
      // =================
      Array.from(document.querySelectorAll(paginationItem)).forEach((item) => {
        item.addEventListener('click', function () {
          Array.from(document.querySelectorAll(paginationItem)).forEach((span) => {
            span.classList.remove(activeClass);
          });
          this.classList.add(activeClass);

          Array.from(document.querySelectorAll(activeElement)).forEach((item) => {
            item.classList.remove(activeClass);
          });
          document.querySelector(element + ':nth-child(' + (document.querySelectorAll(paginationItem + '.' + activeClass).length + 1) + ')').classList.add(activeClass);
        });
      });

      // Pagination Coor.
      // =================
      function coordinatePagination() {
        Array.from(document.querySelectorAll(paginationItem)).forEach((item) => {
          item.classList.remove(activeClass);
        });
        document.querySelector(paginationItem + ':nth-child(' + (document.querySelectorAll(activeElement).length + 1) + ')').classList.add(activeClass);
      }

      // Stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
      var listContainer = document.getElementsByClassName(list)[0];

      listContainer.addEventListener('touchstart', handleTouchStart, false);
      listContainer.addEventListener('touchmove', handleTouchMove, false);

      var xDown = null;
      var yDown = null;

      function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
      }

      function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            document.querySelector('.next').click();
          } else {
            document.querySelector('.prev').click();
          }
        }

        // reset values
        xDown = null;
        yDown = null;
      }
    }
  }, []);

  return (
    <>
      <link href="//fonts.googleapis.com/css?family=Oswald:300" rel="stylesheet" type="text/css" />
      <link type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css" rel="stylesheet" />

      <div className="controls baby-controls"></div>

      <div className="pagination baby-pagination"></div>

      <ol className="baby" id="baby">
        <li className="baby-item one">
          <div class="container">
            <h1>Title</h1>
            <p>Paragraph text goes here.</p>
            <img src={ProfilePic} alt="Profile Picture" className="profile-pic" />
          </div>
        </li>
        <li className="baby-item two"></li>
        <li className="baby-item three"></li>
        <li className="baby-item four"></li>
      </ol>
    </>
  );
}

export default BabySlider;
