  setInterval(() => {
      var date = new Date();
      var htime = date.getHours();
      var mtime = date.getMinutes();
      var stime = date.getSeconds();


      hour.style.transform = `rotate(${30*htime + 1/2*mtime}deg)`;
      minute.style.transform = `rotate(${6*mtime}deg)`;
      second.style.transform = `rotate(${6*stime}deg)`;

  }, 1000)