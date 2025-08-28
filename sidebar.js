window.document.addEventListener("DOMContentLoaded", function (event) {
  var roomHtml = "<span class='sidebar-subtitle'>Th 6:30-9pm, Walsh 394</span>";
  var termHtml = "<span class='sidebar-subtitle'>Georgetown Fall 2025</span>";
  var emailHtml = "<span class='sidebar-subtitle w-100'>Prof. Jeff Jacobs&nbsp;<a href='mailto:jj1088@georgetown.edu' target='_blank'><i class='bi bi-envelope-at ps-1 pe-1'></i></a></span>";
  // https://icons8.com/icon/set/zoom/group-color
  // var zoomIconBlue = "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='22' height='22' viewBox='0 0 48 48'><circle cx='24' cy='24' r='20' fill='#2196f3'></circle><path fill='#fff' d='M29,31H14c-1.657,0-3-1.343-3-3V17h15c1.657,0,3,1.343,3,3V31z'></path><polygon fill='#fff' points='37,31 31,27 31,21 37,17'></polygon></svg>";
  // var zoomHtml = `<a href='https://georgetown.zoom.us/j/92295251878?pwd=K8nOs3w9uRlj3mfn63bh0yazBpBbsC.1' target='_blank' style='text-decoration: none !important;'><div class='sidebar-subtitle btn btn-outline-dark btn-block mt-2 mx-0 px-2 w-100 d-flex justify-content-center align-items-center'><span class='icon ps-0'>${zoomIconBlue}</span><div class='flex-grow-1 h-100' style='line-height: 1.0;'>Zoom Link</div><span class='bi bi-box-arrow-up-right pe-1 ps-1 me-0' style='font-size: 95%;'></span></div></a>`;
  let sectionToggleHtml= `<span class='btn-group section-toggle' role='group' aria-label='Basic radio toggle button group' style='display: inline-flex !important; margin-top: 4px !important; width: 100% !important;'><input type='radio' class='btn-check pt-5' name='btnradio' id='btn-radio-01' autocomplete='off' onclick=\"window.toggleSectionClicked('01');\"><label class='btn btn-outline-secondary btn-sm' for='btn-radio-01' id='btn-label-01'>Sec 01</label><input type='radio' class='btn-check' name='btnradio' id='btn-radio-02' autocomplete='off' onclick=\"window.toggleSectionClicked('02');\"><label class='btn btn-outline-secondary btn-sm' for='btn-radio-02' id='btn-label-02'>Sec 02</label></span><br><span class='section-info sidebar-subtitle'><span class='sec-day'>M</span> <span class='sec-time'>3:30-6pm</span>, <span class='sec-room'>Walsh 394</span>`
  var subtitleDiv = $(`${sectionToggleHtml}<br>${termHtml}<br>${emailHtml}`);
  $('.sidebar-title').append(subtitleDiv);
  
  // And once the sidebar is set up we can do this stuff...
  const sectionKey = 'dsan6000-section';
  window.toggleSectionClicked = (sectionStr) => {
    console.log("window.toggleSectionClicked: " + sectionStr);
    applyToggleSection(sectionStr);
  };
  window.toggleIconClicked = () => {
    console.log("window.toggleIconClicked()");
    // Figure out the current section
    let curSectionStr = getSection();
    // Find its inverse
    let newSectionStr = invertSection(curSectionStr);
    // And apply that
    applyToggleSection(newSectionStr);
  };
  const defaultSection = "01";
  const getSection = () => {
    console.log("getSection()");
    if (localStorage.getItem(sectionKey) === null) {
      console.log("section was null");
      setSection(defaultSection);
    }
    if (localStorage.getItem(sectionKey) === undefined) {
      console.log("section was undefined");
      setSection(defaultSection);
    }
    if (localStorage.getItem(sectionKey) == "undefined") {
      // Sigh
      console.log("section was the string 'undefined'");
      setSection(defaultSection);
    }
    return localStorage.getItem(sectionKey);
  };
  const setSection = (secStr) => {
    localStorage.setItem(sectionKey, secStr);
  };
  const invertSection = (secStr) => {
    return(secStr == "01" ? "02" : "01");
  }
  const sectionData = {
    '01': {
      '.sec-num': '01',
      '.sec-day': 'M',
      '.sec-day-full': 'Monday',
      '.sec-time': '3:30-6pm',
      '.sec-room': 'Walsh 394',
      '.sec-zoom-link': 'https://georgetown.zoom.us/j/91628796534?pwd=BSnBpL4VeysAQMbUtbH4MmwOunglLh.1',
      '.sec-w01-date': 'Aug 28',
      '.sec-w02-date': 'Sep 2',
      '.sec-w03-date': 'Sep 6',
      '.sec-w04-date': 'Sep 12',
      '.sec-w05-date': 'Sep 19',
      '.sec-w06-date': 'Sep 26',
      '.sec-w07-date': 'Oct 3',
      '.sec-w08-date': 'Oct 10',
      '.sec-w09-date': 'Oct 24',
      '.sec-w10-date': 'Oct 31',
      '.sec-w11-date': 'Nov 7',
      '.sec-w12-date': 'Nov 14',
      '.sec-w13-date': 'Nov 21',
      '.sec-start': '12:30pm',
      '.sec-p10': '12:40pm',
      '.sec-p15': '12:45pm',
      '.sec-p20': '12:50pm',
      '.sec-p30': '1:00pm',
      '.sec-p35': '1:05pm',
      '.sec-p40': '1:10pm',
      '.sec-p45': '1:15pm',
      '.sec-p50': '1:20pm',
      '.sec-p55': '1:25pm',
      '.sec-p60': '1:30pm',
      '.sec-p65': '1:35pm',
      '.sec-p70': '1:40pm',
      '.sec-p80': '1:50pm',
      '.sec-p90': '2:00pm',
      '.sec-p100': '2:10pm',
      '.sec-p130': '2:40pm',
      '.sec-p140': '2:50pm',
      '.sec-end': '3:00pm',
    },
    '02': {
      '.sec-num': '02',
      '.sec-day': 'Th',
      '.sec-day-full': 'Thursday',
      '.sec-time': '6:30-9pm',
      '.sec-room': 'Walsh 394',
      '.sec-zoom-link': 'https://georgetown.zoom.us/j/92724737140?pwd=rIyVrsa3CDq9xCv4LGNX3Cq0o2J3An.1',
      '.sec-w01-date': 'Aug 28',
      '.sec-w02-date': 'Sep 4',
      '.sec-w03-date': 'Sep 6',
      '.sec-w04-date': 'Sep 13',
      '.sec-w05-date': 'Sep 20',
      '.sec-w06-date': 'Sep 27',
      '.sec-w07-date': 'Oct 4',
      '.sec-w08-date': 'Oct 11',
      '.sec-w09-date': 'Oct 25',
      '.sec-w10-date': 'Nov 1',
      '.sec-w11-date': 'Nov 8',
      '.sec-w12-date': 'Nov 15',
      '.sec-w13-date': 'Nov 21',
      '.sec-start': '3:30pm',
      '.sec-p10': '3:40pm',
      '.sec-p15': '3:45pm',
      '.sec-p20': '3:50pm',
      '.sec-p30': '4:00pm',
      '.sec-p35': '4:05pm',
      '.sec-p40': '4:10pm',
      '.sec-p45': '4:15pm',
      '.sec-p50': '4:20pm',
      '.sec-p55': '4:25pm',
      '.sec-p60': '4:30pm',
      '.sec-p65': '4:35pm',
      '.sec-p70': '4:40pm',
      '.sec-p80': '4:50pm',
      '.sec-p90': '5:00pm',
      '.sec-p100': '5:10pm',
      '.sec-p130': '5:40pm',
      '.sec-p140': '5:50pm',
      '.sec-end': '6:00pm',
    }
  };
  const applyToggleSection = (newStr) => {
    console.log("Changing to " + newStr);
    setSection(newStr);
    // First, if we're on slides, change the toggle
    // icon accordingly
    updateToggleIcon(newStr);
    let sData = sectionData[newStr];
    for (const [sKey, sVal] of Object.entries(sData)) {
      if (sKey.startsWith(".rec-link")) {
        $(sKey).attr('href', sVal);
      } else if (sKey == ".sec-zoom-link") {
        $(sKey).attr('href', sVal);
      } else {
        $(sKey).text(sVal);
      }
      //console.log(`${key}: ${value}`);
    }
    // A special one for the slides... Very janky
    const s02Replace = {
      // w01
      'Wednesday, August 23, 2023': 'Tuesday, August 22, 2023',
      // w02
      'Wednesday, August 30, 2023': 'Tuesday, August 29, 2023',
      // w03
      'Wednesday, September 6, 2023': 'Tuesday, September 5, 2023',
      // w04
      'Wednesday, September 13, 2023': 'Tuesday, September 12, 2023',
      // w05
      'Wednesday, September 20, 2023': 'Tuesday, September 19, 2023',
      // w06
      'Wednesday, September 27, 2023': 'Tuesday, September 26, 2023',
      // w07
      'Wednesday, October 4, 2023': 'Tuesday, October 3, 2023',
      // w08
      'Wednesday, October 18, 2023': 'Tuesday, October 17, 2023',
      // w09
      'Wednesday, October 25, 2023': 'Tuesday, October 24, 2023',
      // w10
      'Wednesday, November 1, 2023': 'Tuesday, October 31, 2023',
      // w11
      'Wednesday, November 8, 2023': 'Tuesday, November 7, 2023',
      // w12
      'Wednesday, November 15, 2023': 'Tuesday, November 14, 2023'
    };
    const s03Replace = {
      // w01
      'Tuesday, August 22, 2023': 'Wednesday, August 23, 2023',
      // w02
      'Tuesday, August 29, 2023': 'Wednesday, August 30, 2023',
      // w03
      'Tuesday, September 5, 2023': 'Wednesday, September 6, 2023',
      // w04
      'Tuesday, September 12, 2023': 'Wednesday, September 13, 2023',
      // w05
      'Tuesday, September 19, 2023': 'Wednesday, September 20, 2023',
      // w06
      'Tuesday, September 26, 2023': 'Wednesday, September 27, 2023',
      // w07
      'Tuesday, October 3, 2023': 'Wednesday, October 4, 2023',
      // w08
      'Tuesday, October 17, 2023': 'Wednesday, October 18, 2023',
      // w09
      'Tuesday, October 24, 2023': 'Wednesday, October 25, 2023',
      // w10
      'Tuesday, October 31, 2023': 'Wednesday, November 1, 2023',
      // w11
      'Tuesday, November 7, 2023': 'Wednesday, November 8, 2023',
      // w12
      'Tuesday, November 14, 2023': 'Wednesday, November 15, 2023'
    };
    let shownDate = $('p.date').text();
    //console.log(shownDate);
    if (newStr == "03" && (s03Replace.hasOwnProperty(shownDate))) {
      console.log("Replacing with s03 date");
      let replaceWith = s03Replace[shownDate];
      console.log("Replacement should be: " + replaceWith);
      $('p.date').text(replaceWith);
    }
    if (newStr == "02" && (s02Replace.hasOwnProperty(shownDate))) {
      console.log("Replacing with s02 date");
      let replaceWith = s02Replace[shownDate];
      $('p.date').text(replaceWith);
    }
  };
  const updateToggleIcon = (newSection) => {
    // Check for the toggle button
    let toggleSelector = '#section-toggle-icon';
    let toggleElt = $(toggleSelector);
    if (toggleElt.length && newSection == "03") {
      toggleElt.removeClass("bi-toggle-off");
      toggleElt.addClass("bi-toggle-on");
      // And bold the name
      let oldLabelElt = $('#toggle-02-label');
      oldLabelElt.css('font-weight', 'normal')
      let newLabelElt = $('#toggle-03-label');
      newLabelElt.css('font-weight', 'bolder');
      return;
    }
    if (toggleElt.length && newSection == "02") {
      toggleElt.removeClass("bi-toggle-on");
      toggleElt.addClass("bi-toggle-off");
      let oldLabelElt = $('#toggle-03-label');
      oldLabelElt.css('font-weight', 'normal');
      let newLabelElt = $('#toggle-02-label');
      newLabelElt.css('font-weight', 'bolder');
    }
  };
  let localStorageChecked = false;
  if (!localStorageChecked) {
    let curSection = getSection();
    //console.log("Detected section:");
    //console.log(curSection);
    // Check for the slider
    let radioSelector = `#btn-radio-${curSection}`;
    let radioElt = $(radioSelector);
    if (radioElt.length) {
      radioElt.click();
    }
    // Check for the toggle icon
    let toggleSelector = '#section-toggle-icon';
    let toggleElt = $(toggleSelector);
    if (toggleElt.length) {
      //updateToggleIcon(curSection);
      applyToggleSection(curSection);
    }
    localStorageChecked = true;
  }
});
