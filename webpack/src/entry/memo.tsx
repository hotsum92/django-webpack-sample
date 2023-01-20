import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')
const root = createRoot(container!)

const CSRFToken = () => {
  const csrftoken = getCookie('csrftoken')!;

  return (
    <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
  );
};

// https://stackoverflow.com/questions/50732815/how-to-use-csrf-token-in-django-restful-api-and-react
function getCookie(name: any) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

root.render(
  <div>
    <div>memo</div>
    <form method='post'>
      <CSRFToken />
      <div>
        <label htmlFor="value">value:</label><br/>
        <input name="value" type="text" />
      </div>

      <button type="submit">送信</button>
    </form>
  </div>
)

