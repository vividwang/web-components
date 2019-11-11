class Loading extends HTMLElement {
  constructor(props) {
    super(props);

    const shadowRoot = this.attachShadow({mode: 'open'});
    const container = document.createElement('div');
    const box1 = document.createElement('div');
    const box1Inner = document.createElement('div');

    box1.className = 'box';
    box1Inner.className = 'box-inner';
    box1.appendChild(box1Inner);

    const box2 = document.createElement('div');
    const box2Inner = document.createElement('div');

    box2.className = 'box2';
    box2Inner.className = 'box-inner2';
    box2.appendChild(box2Inner);

    const box3 = document.createElement('div');
    const box3Inner = document.createElement('div');

    box3.className = 'box3';
    box3Inner.className = 'box-inner3';
    box3.appendChild(box3Inner);
    const style = document.createElement('style');

    style.textContent =
      `
          .loading {
            position: relative;
            width: 400px;
            height: 400px;
            margin: 150px auto;
          }
          .box {
            position: absolute;
            top: 0;
            width: 400px;
            height: 400px;
            background-color: transparent;
            border: solid 1px #000000;
            border-radius: 50%;
            animation: 5s linear 0.3s infinite both spin;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
          to {
            transform: rotate(360deg);
            }
          }

          .box-inner {
            position: absolute;
            top: -7px;
            left: 200px;
            width: 14px;
            height: 14px;
            border-radius: 7px;
            background-color: #00e676;
          }

          .box2 {
            position: absolute;
            width: 300px;
            height: 300px;
            margin: 50px;
            background-color: transparent;
            border: solid 1px #000000;
            border-radius: 50%;
            animation: 3.5s linear 0.3s infinite both spin2;
          }

          @keyframes spin2 {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .box-inner2 {
            position: absolute;
            top: -6px;
            left: 150px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            background-color: #00e676;
          }

          .box3 {
            position: absolute;
            width: 200px;
            height: 200px;
            margin: 100px;
            background-color: transparent;
            border: solid 1px #000000;
            border-radius: 50%;
            animation: 2s linear 0.3s infinite both spin3;
          }

           @keyframes spin3 {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .box-inner3 {
            position: absolute;
            top: -5px;
            left: 100px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            background-color: #00e676;
          }
      `;

    container.className = 'loading';
    container.appendChild(box1);
    container.appendChild(box2);
    container.appendChild(box3);
    shadowRoot.appendChild(container);
    shadowRoot.appendChild(style);
  }
}

customElements.define('spin-loading', Loading);