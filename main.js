import { TimelineData } from "./data.js";
$(document).ready(function () {
  function generateTimeLine(data) {
    data.forEach(function (item) {
      // Crea la etiqueta de tiempo
      let timeLabel = $(
        `<div class="time-label"><span class="bg-${item.mainColor ?? "red"}">` +
          item.timelabel +
          "</span></div>"
      );
      $(".timeline").append(timeLabel);
      console.log(window.location.href);
      // Crea el ítem de la línea de tiempo
      let timelineItem = $(
        `<div><i class="bg-${item.iconColor} ` +
          item.icon +
          '"></i><div class="timeline-item"><h3 class="timeline-header">' +
          "<span class='text-blue text-bold'>" +
          item.resaltHeader +
          "</span>" +
          " " +
          item.header +
          "</h3></div></div>"
      );
      // Si hay imágenes, añádelas
      let timelineBody = $(
        '<div class="timeline-body"><p>' + item.text + "</p></div>"
      );
      if (item.images && item.images.length > 0) {
        let customWidth = item?.widthImg ?? "250px";
        item.images.forEach(function (image) {
          timelineBody.append(
            '<img src="' +window.location.href+ image + `" alt="..." style="margin-right: 5px; max-width:${customWidth}; width:100%">`
          );
        });
      }
      timelineItem.find(".timeline-item").append(timelineBody);
      if (item.author) {
        timelineItem.find(".timeline-item").append(`
            <div class="timeline-footer">
                <span class="badge rounded-pill bg-${item.iconColor} ">${item.author}</span>
            </div>`);
      }
      $(".timeline").append(timelineItem);
    });
  }

  // Añade el finalizador de la línea de tiempo
  generateTimeLine(TimelineData);
  $(".timeline").append('<div><i class="fas fa-clock bg-gray"></i></div>');
});
