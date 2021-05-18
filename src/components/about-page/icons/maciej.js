import * as React from "react"

const Maciej = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={76}
      height={76}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip22)">
        <path
          d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z"
          fill="currentColor"
        />
        <g clipPath="url(#prefix__clip23)">
          <path
            d="M11.345 90.053c-.35-1.44.012-3.28.73-4.544 1.28-2.235 3.88-2.079 6.018-2.903 2.929-1.14 2.43-3.511 3.534-6.078.703-1.63 1.638-3.145 2.57-4.652.962-1.55 1.788-3.165 2.67-4.757.825-1.497-.9-3.216-1.605-4.502a95.063 95.063 0 01-2.787-5.471c-1.58-3.331-4.198-5.934-5.717-9.322-1.558-3.462-3.145-6.821-.849-10.345.495-.747.99-1.522.966-2.45-.018-.892-.481-1.76-.735-2.601-.495-1.657-1.034-3.416-.625-5.148.22-.93.575-1.772.45-2.748-.115-.905-.346-1.769-.378-2.689-.064-1.858.297-3.717.88-5.474 1.1-3.327 2.884-6.57 5.884-8.494 3-1.924 6.136-2.65 9.7-2.457.803.043 1.628.27 2.431.154.74-.112 1.39-.407 2.153-.442 3.038-.109 6.178 1.048 8.838 2.435 2.605 1.358 4.299 3.252 5.824 5.718 1.688 2.732 3.22 5.51 4.031 8.636a16.39 16.39 0 01.58 4.823c-.035.816-.121 1.63-.141 2.448-.008.383 0 .765.023 1.154.04.526-.012.686.45.85.652.232 1.427.138 2.1.373a4.097 4.097 0 011.718 1.154c.896 1.017 1.254 2.376 1.383 3.696.268 2.792-.406 5.77-1.71 8.242a10.995 10.995 0 01-2.651 3.361c-1.056.866-2.382 1.017-2.377 2.567 0 1.691-.25 3.427.053 5.11.094.52.11.958.63 1.137.66.228 1.484-.07 2.18.088 1.584.36 2.232 1.33 3.167 2.556.78 1.027 2.002 1.773 2.581 2.951.482.978.297 2.021 1.084 2.864.787.842 1.989 1.498 2.969 2.08 3.034 1.8 6.493 2.738 9.713 4.142a54.486 54.486 0 0110.305 5.816 56.929 56.929 0 012.358 1.813c.59.475 1.399.918 1.853 1.532.484.659.357 1.468.316 2.232-.053.962-.026 1.932-.026 2.896 0 1.467.275 3.175-.241 4.58-.546 1.484-1.961 1.905-3.412 1.943-1.65.044-3.322-.086-4.977-.086H45.633c-8.388 0-16.777.003-25.167.008-2.081 0-4.166-.033-6.246.018-1.69.037-2.563-.924-2.875-2.213z"
            fill="#000"
          />
          <path
            d="M18.521 45.517c.23.603.491 1.195.782 1.772.129.253.266.494.406.75.094.164.188.33.287.494l-.238-.379c.423.803 1.028 1.526 1.485 2.308-.508-.885-.096-.196.058 0 .153.196.353.438.534.66.882 1.044 1.694 2.162 2.194 3.444a32.504 32.504 0 001.622 3.386c.568 1.1 1.051 2.236 1.681 3.314.66 1.134 1.386 2.232 1.968 3.414a3.499 3.499 0 01-.112 3.255c.019.18.027.362.023.544a.329.329 0 01.188 0c.277.08.33.41.354.686a1.811 1.811 0 01-.05.321c-.01.277.039.552.144.808.177.476.52.913.352 1.474-.024.142-.02.288.014.428.065.157.113.319.144.485.01.1.032.198.064.293a1.7 1.7 0 01.103.383c.011.102.036.202.072.298.165.236.061.48.028.72-.056.328-.01.664.136.963.494.557.51 1.23.52 1.925.024 1.474.395 1.934 1.755 2.282.66.165 1.046.628.967 1.5-.135 1.484.125 2.938.3 4.398a.65.65 0 00.124.224c.66.376.92-.35 1.392-.494a.92.92 0 00.266-.24c.112-.205.242-.4.387-.585.038-.069.078-.136.117-.206.422-.394.729-.895.89-1.45.111-.488.392-.922.792-1.223a1.457 1.457 0 00.612-1.113c.081-.712.137-1.484.645-2.01.8-.824.863-1.67.602-2.75-.33-1.333-.674-1.588-1.9-.937a2.342 2.342 0 00-.747.638c-.33.422-.78.68-1.2.989-.545.399-1.002.214-1.252-.247-.385-.706-1.02-1.25-1.341-1.94-.96-2.058-1.965-4.121-1.937-6.489.012-.959-.527-1.831-.641-2.787a1 1 0 00-.413-.605c-1.441-1.134-1.95-2.802-2.554-4.42-.103-.272-.149-.572.079-.773.533-.473.407-1.094.458-1.684.043-.508-.194-.825-.671-.86-.53-.042-.75-.354-.948-.777a19.967 19.967 0 00-1.27-2.308c-.195-.305-.363-.618-.33-.99a4.03 4.03 0 000-.444c0-.147-.022-.292-.04-.435-.165-1.458-1.154-2.941-.364-4.464a9.8 9.8 0 01.181-.457c.33-.76.708-1.521.899-2.385.1-.135.204-.269.31-.4a24.483 24.483 0 012.134-2.241c.03.361-.074.597-.067.842.006.246.047.495.311.622.85.42 2.145-.051 2.474-.953.207-.549.52-.897 1.119-.931 1.073-.061 1.466-.948 1.994-1.659a.606.606 0 00-.018-.708c-.683-.825-.76-1.85-.99-2.832a7.247 7.247 0 00-.651-1.776c-.179-.33-.347-.755-.825-.677-.444.074-.57.481-.647.867-.196.999-.567 1.95-.808 2.937a1.616 1.616 0 01-1.136 1.202c-.306.099-.604.22-.893.363-.145.069-.287.141-.427.216-1.441.591-3.256.426-4.473-.57l-.394-.309c-1.06-.837-2.233-1.871-1.761-3.343v-.437c.01-1.223.767-2.098 1.44-2.987.455-.601 1.245-.503 1.904-.577.495-.054.94-.2 1.155-.66a7.032 7.032 0 012.373-2.826c.4-.279 1.348-.607 1.485-1.126.257-.927-1.13-.824-1.627-1.306a2.098 2.098 0 00-1.337-.555c-.66-.061-.695-.165-.345-.758.675-1.154 1.856-1.423 3.02-1.575.638-.084 1.031-.293 1.252-.857.245-.62.705-1.13 1.296-1.437.343-.177.653-.412.916-.694.406-.462.757-.495 1.237-.055.457.414.933.99 1.608.902 1.65-.23 3.36.165 4.976-.494.48-.207.995-.325 1.517-.35.99-.031 1.32-.958 1.98-1.439a.284.284 0 00.057-.312c-.305-.703-.427-1.47-.725-2.172-.132-.312-.457-.473-.787-.554-2.372-.585-4.69-.641-6.809.824-.908.628-1.979.788-2.985 1.1a2.068 2.068 0 01-1.596-.218 2.926 2.926 0 00-1.764-.28c-.626.07-1.256.125-1.883.21-1.98.274-3.804.848-5.173 2.417-.198.192-.42.358-.66.495a4.228 4.228 0 00-1.086 1.207c-.604.905-.929 2.007-1.823 2.777.018.445.033.89.009 1.334-.058 1.071-.462 2.222-.852 3.229-.075.198-.156.392-.239.587.97 2.16 1.76 4.657 1.429 7.02-.208 1.484-.927 2.734-1.745 3.957a6.536 6.536 0 00-.05.273c-.05.348-.07.7-.105 1.047-.029.259-.081.524-.132.783-.052.259-.137.52-.055.767.073.222.223.41.31.626.104.256.192.518.279.778.175.523.33 1.05.515 1.571.052.148.097.282.151.41z"
            fill="#fff"
          />
          <path
            d="M89.389 81.92a47.004 47.004 0 00-2.083-1.71 59.647 59.647 0 00-4.153-2.92c-.38-.24-.767-.475-1.155-.7-.165-.093-.322-.18-.48-.273-.726-.356-1.45-.712-2.18-1.058-3.17-1.497-6.36-2.967-9.674-4.121-1.596-.557-3.191-.946-4.653-1.831-1.297-.79-2.144-1.954-2.88-3.245-.265-.458-.496-.933-.74-1.4l-.06-.103c-.072-.096-.164-.242-.144-.287.038.1.087.197.145.287.086.114.145.153-.041-.138-.22-.342-.443-.68-.668-1.013-.861-1.262-1.793-2.472-2.75-3.664a4.79 4.79 0 01-.895.068h-.071a2.316 2.316 0 01-.391.417c-.742.812-1.71 1.36-2.49 2.131a318.109 318.109 0 00-6.623 6.767c-1.484 1.576-3.063 3.07-4.59 4.616-.732.738-.69.989.233 1.39 1.47.634 2.733 1.611 4.045 2.485 1.66 1.106 3.231 2.354 4.864 3.505.861.606 1.597.38 1.927-.606.824-2.487 2.093-4.77 3.298-7.08.532-1.018 1.294-1.903 1.77-2.957.104-.232.317-.36.525-.275.275.114.165.351.047.552-.837 1.357-.96 2.883-1.081 4.42-.165 2.143-.378 4.27-1.34 6.237-.094.195-.155.526-.351.528-1.164.01-1.95.7-2.736 1.414-.075.068-.207.068-.312.096a1.624 1.624 0 00-.772.455c-.942 1-2.098 1.777-2.969 2.847a1.506 1.506 0 01-1.32.558c-1.75-.117-3.478.236-5.223.218-.45 0-.876.37-1.275.23-.833-.29-1.494.121-2.215.352-1.252.399-2.502.81-3.823.918a3.009 3.009 0 00-.74 0c-1.211.155-2.334-.302-3.604-.44.373-.544.825-.867 1.182-1.266a1.337 1.337 0 00.347-1.405c-.241-.89-.785-1.62-1.109-2.456-.42-1.09-1.32-1.945-1.505-3.145-.149-.346-.192-.743-.495-1.019-.42-.219-.79-.033-1.155.145-.633.304-1.21.724-1.901.912a.454.454 0 00-.349.407c.022.557.421.862.797 1.182.322.308.223.526-.153.66a3.63 3.63 0 00-1.272.74c-.2.188-.427.244-.447-.114-.038-.617-.224-1.258.165-1.841.049-.11.077-.228.084-.348 0-.257-.048-.495-.33-.597a.533.533 0 00-.239.025 1.818 1.818 0 00-.442.39 2.018 2.018 0 00-.242.4c-.535.823-.922 1.747-1.549 2.69a4.986 4.986 0 01-.08-1.883c.037-.366.09-.727.148-1.09-.165.406-.33.815-.355.892-.361 1.378-1.65 2.155-2.995 2.338a2.79 2.79 0 01-.99.573c-.86.284-1.734.521-2.619.71-.295.06-.59.12-.886.186-.099.02-.2.047-.298.07a8.596 8.596 0 00-.464.182c-.05.036-.118.08-.173.115-.026.04-.054.078-.082.115-.045.113-.1.225-.14.338a.373.373 0 00-.014.042 1.172 1.172 0 01-.06.229c0 .025-.012.05-.016.076a9.79 9.79 0 00-.102.989c-.008.132-.01.263-.015.397.038.292.02.608.043.898l.041.495c24.876-.018 49.75-.018 74.625 0 .564 0 .674-.11.674-.674l-.001-7.028z"
            fill="#fff"
          />
          <path
            d="M53.34 27.054c.367 1.907-.313 4.052.26 5.923.438 1.43 1.788.494 2.851.481 2.997-.038 2.578 4.09 2.276 6.058-.255 1.672-.798 3.32-1.756 4.726a9.169 9.169 0 01-1.859 2.003c-.66.526-1.517.775-2.144 1.319-1.049.897-.762 2.453-.73 3.684.024.99-.08 1.978-.05 2.967.05 1.696.277 4.451 2.27 5.003.705.196 2.53-.626 2.749.177.236.863-1.994 2.395-2.509 2.906-2.949 2.922-5.901 5.842-8.857 8.761-.684.664-3.195 2.277-3.211 3.302-.01.628.628.714 1.103.938.867.434 1.702.93 2.498 1.483 1.558 1.037 3.067 2.166 4.563 3.29.777.583 2.441 2.033 3.167.659.31-.584.165-1.402.386-2.031.265-.783.783-1.454 1.2-2.16 1.03-1.74 1.856-3.592 2.824-5.366.319-.583.643-1.218 1.32-1.432.165 1.154-.6 2.326-.87 3.416-.314 1.277-.316 2.624-.385 3.931-.1 1.886-.38 3.717-1.907 5-.945.794-2.133 1.206-3.134 1.912-.894.628-1.535 1.516-2.36 2.222-1.8 1.536-4.165 1.26-6.365 1.462-2.852.262-5.66 1.44-8.514 1.51-.348-1.09.99-2.013 1.732-2.547 1.217-.865 2.248-1.937 3.442-2.822 1.105-.824 2.474-1.187 3.566-2.01.67-.495 1.577-1.692 2.542-1.412.453.132.613.597 1.06.737.447.14 1.376-.02 1.702-.366-.752-1.41-2.45-2.199-3.683-3.132-.963-.725-2.62-2.46-3.968-2-1.14.388-1.839 2.374-2.207 3.385-.503 1.384-.212 2.504-1.285 3.626-.567.594-1.782 1.963-2.727 1.649.23-1.649 1.784-3.43 2.579-4.888.932-1.708 1.45-2.911.643-4.809-1.542.165-2.287 2.234-3.78 2.109-1.357-.114-2.218-2.105-2.682-3.172-1.38-3.181-1.079-6.961-3.008-9.927-.72-1.104-1.897-2.088-2.243-3.4-.233-.877.242-.958.511-1.67.242-.638-.205-1.207-.553-1.73-.867-1.298-1.93-2.53-2.605-3.942-.786-1.64-.764-3.568-.462-5.325.351-2.049 1.441-6.333 4.083-6.478.452.86-.699 1.619.741 1.851 1.232.2 1.108-.761 1.757-1.483 1.154-1.28 3.495-.851 2.683-3.319-.447-1.361-1.154-3.198-1.928-4.376-.92 1.432-.726 3.816-2.268 4.808-1.141.735-2.995 1.358-4.352 1.235a4.316 4.316 0 01-1.35-.363 4.692 4.692 0 01-.427-.212c-1.217-1.2-2.537-2.52-2.532-4.4a6.16 6.16 0 01.083-.52 9.091 9.091 0 01.66-1.963c.577-1.266 1.877-1.374 2.968-1.978.224-.119.433-.264.622-.432.949-1.309 2.763-2.133 3.093-3.781.33-1.154-1.32-.824-1.993-1.416a1.818 1.818 0 01-.481-.397c-.495-.66 0-1.484.66-1.814 1.649-.66 3.133-1.318 4.37-2.53.144-.14.29-.279.439-.41.745-.66 1.57-1.168 2.639-.924 1.568.36 2.7 1.154 4.389 1.018a12.867 12.867 0 003.036-.584c.825-.282 1.909-.739 2.172-1.67.28-.989-.494-2.207-1.31-2.72-1.949-1.208-4.72.327-6.534 1.118-.932.407-1.882.865-2.9 1.009-1.916.27-3.836-.355-5.757-.202-2.31.182-4.046 1.446-5.471 3.068-.178.203-.351.412-.52.625-1.004 1.235-1.334 2.883-2.488 3.872-.825-1.319-.66-2.802-.583-4.258.04-.254.088-.506.14-.753.155-.743.342-1.45.495-2.065.358-1.415.841-2.709 1.737-3.87.458-.595.704-1.328 1.164-1.921.433-.556 1.74-1.214 1.092.034.835.285 1.133.467.45 1.241-.682.775-1.632 1.222-2.398 1.885-1.472 1.27-1.591 3.108-1.484 4.902 0 .145-.066.494-.105.824.33.35-.495.844.494.68.495 0 .495-.66.959-.99.15-.19.303-.38.46-.565 1.102-1.3 2.39-2.458 3.924-3.24 3.94-2.017 8.657-1.534 12.864-2.515 2.283-.53 4.153.03 6.268.925 1.496.635 2.894 1.319 3.793 2.743.574.924.995 1.933 1.249 2.99.264 1.108.429 1.238 1.207 1.959.779.72.632 1.894 1.118 2.792a9.876 9.876 0 011.015 3.061c.351-.262.279-.79.668-.989z"
            fill="#C4C3C6"
          />
          <path
            d="M53.38 26.993a4.057 4.057 0 01-.46 1.502c-1.484-1.072-1.575-3.792-2.332-5.336-.678-1.377-1.346-2.374-1.84-3.862-.495-1.489-1.485-2.677-2.737-3.6-2.576-1.888-5.83-2.16-8.887-1.64-3.382.573-7.239.606-10.466 1.763a11.359 11.359 0 00-4.323 2.733c-.967 1.002-1.735 2.603-3.134 3.06-.919-1.59-.38-4.06.34-5.635a7.045 7.045 0 011.849-2.472c.681-.564 1.687-.876 2.132-1.649-.423-.125-.875-.094-1.32-.095 1.086-1.978 3.497-3.385 5.648-3.886.787-.183 7.076-.37 7.238.508-.398-2.158 7.027.188 7.822.579 2.387 1.172 4.528 2.154 5.67 4.655.936 2.049 2.51 3.791 3.352 5.829.742 1.759 1.75 5.156 1.448 7.546zM36.407 84.452c.52-.427 1.038-.857 1.56-1.28 1.287-1.042 1.758-2.424 2.092-3.991.374-1.763 1.034-3.762 3.227-3.523 2.117.232 3.59 2.184 5.19 3.371.48.356 3.63 2.183 1.799 2.49-.307.052-.624-.164-.922-.18-.404-.017-.968.33-1.338.196-.544-.188-.249-.694-.584-.892-.42-.25-.84.214-1.154.445-2.121 1.594-4.482 2.842-6.608 4.433-1.07.8-2.144 1.666-2.939 2.746-.226.306-.478.956-.9 1.04-.543.109-.863-.37-.64-.869-.495.587-1.852.88-2.31.056-.57-1.033 1.155-2.174 1.815-2.678.584-.442 1.15-.902 1.712-1.364z"
            fill="#000"
          />
          <path
            d="M24.823 81.162c-.217.686-.66 1.292-.941 1.947-.165.386-.36 1.106-.837 1.21-.506-1.034-.31-2.4-.14-3.49.2-1.254.553-2.48 1.051-3.648.99-2.344 2.494-4.34 3.747-6.53.3-.508.565-1.037.792-1.582.139-.346.41-1.215.938-.933.319.165.558.89.45 1.227-.069.207-.313.165-.45.377-.156.236-.115.567-.084.824.103.853.177 1.702.215 2.562.05 1.093-.195 2.046-.361 3.11-.09.568-.271 1.74.407 2.035.33.14.742 0 .777.476.034.477-.427.73-.8.898-.99.439-1.953.864-2.905 1.359-.801.417-1.397-.449-1.743-1.091-.247-.459.102-.912-.09-1.344-.182-.402-.646-.366-.858-.016-.253.41-.13.923-.165 1.376-.04.557-.126 1.108-.188 1.662-.03.267-.061.535-.068.804.259-.254.72-1.533 1.253-1.233zM35.785 84.977c-.788.8-1.624 1.56-2.332 2.428-.2.244-1.32.338-.429 1.045.737.583 1.484.702 2.212-.302.021.458.038.79.054 1.123-1.266-.078-2.533-.14-3.793-.24-.495-.039-.474-.405-.165-.601 3.76-2.458.223-4.48-.384-6.671-.127-.455-.299-.898-.45-1.345.421-.112.565-.33.494-.806-.188-1.268.025-2.567-.262-3.835-.041-.186-.096-.45.203-.542.824 3.595 4.796 6.114 3.557 10.412h-.008l1.303-.666z"
            fill="#C4C3C6"
          />
          <path
            d="M30.88 75.236c.063.598.116 1.198.165 1.798.074.87.226 1.726.303 2.593.019.205.116 1.095-.107 1.217-.222.122-.569-.274-.66-.424-.305-.494-.196-1.173-.603-1.605-.434-.46-1.109-.538-1.198-1.276-.1-.824.342-1.772.434-2.6.115-1.082.134-2.172.058-3.257-.035-.532-.752-2.209.03-2.487.735-.263.846 1.61.94 2.019.218.958.387 1.926.508 2.901.05.373.093.746.13 1.121z"
            fill="#000"
          />
          <path
            d="M18.084 39.327c1.191-.142 2.97 2.967 3.025 4.43.076 1.979.642 3.957 1.011 5.935.086.452.23.895.347 1.342-.124 0-.33.064-.361.01-.368-.521-1.03-1.083-.998-1.596.107-1.777.777-3.462-1.866-4.27-1.014-.313.061-2.019.165-3.09.046-.506.35-1.391.234-1.444-.771-.351-.442.758-.966.854a.33.33 0 01-.201-.33c.113-.668-.172-1.245-.39-1.841zM19.318 30.16c0 .89-.028 1.319 0 1.759.066.832.165 1.663.254 2.495-.345-.878-.8-1.732-1.013-2.637-.495-2.092-1.083-4.209-.082-6.332l.242-.514c.076.133.205.262.216.402.152 1.757.282 3.521.383 4.827zM30.837 74.105c-.035-.175-.07-.351-.102-.527.026.176.06.352.102.527zM30.65 73.28c-.032-.118-.063-.236-.093-.357.031.122.06.24.092.358zM30.492 72.622l-.069-.373.07.373z"
            fill="#C4C3C6"
          />
          <path
            d="M36.973 50.676c-2.387.448-4.72-.824-7.104-.36a4.145 4.145 0 00-1.748.792c-.36.277-.805.613-1.168.031-.825-1.338 2.41-1.754 3.056-1.94.934-.27 1.868-.545 2.804-.824.71-.213 1.965-.284 2.194-1.091-.942-.246-1.297-.108-2.189.13-.453.122-.924.175-1.24-.233-.41-.53-.084-1.284-.19-1.872-.15-.824-.724-.717-1.35-1.019-.288-.14-.647-.374-.494-.689.186-.397.74-.016 1.072.068.452.117.512.165.802-.096.29-.26.397-.66.729-.91 1.042-.768 2.343-.165 3.463.03.485.086 1.45.277 1.887-.033.528-.374 0-1.106.353-1.484.432-.47 1.224.719 1.562 1.032.455.422.92.837 1.363 1.273.852.842 1.662 1.772 2.104 2.901.472 1.21.277 2.33.236 3.58-.028.815-.087 2.504-1.353 2.43-1.265-.074.213-.857-.047-1.185-.185-.23-1.392-.341-1.7-.406-.581-.123-1.195-.22-1.782-.069-.506.13-1.485.678-1.582 1.26-.089.555.66.412 1.132.573.598.208 1.261.589 1.484 1.22.142.404.188.837-.24.806-.464-.035-.474-.48-1.022-.298-.547.181-1.227.733-1.735 1.053-1.194.752-2.299 1.96-1.778 3.462.81-.526 1.39-2.016 2.49-1.99.702.017.87.66 1.394.923.39.191.759 0 1.181-.14 1.176-.38 1.905-.597 2.509.59.175.341.387.72.793.825.673.174.9-.45 1.37-.749.936-.59 1.7.742 2.673.521-.632 2.155-1.65 4.373-3.309 5.934-.848.8-1.824 1.359-2.875 1.845-1.05.486-2.215 1.437-3.424 1.396-1.184-.041-2.037-1.202-2.652-2.087-.36-.517-.683-1.06-1.039-1.579-.468-.686-.257-.63-.133-1.337.186-1.08-1.026-1.319-1.806-1.521-1.521-.396-.273-1.72.272-2.59.562-.9 2.154-2.182 1.164-3.198-.66-.682-1.453-1.187-1.781-2.143-.393-1.11 4.796-2.669 5.654-2.832zM41.329 38.196c-3.895-.427-6.79-1.818-8.018-5.51-.284-.845-1.704-1.165-1.121-2.396.097-.204.476-.504.516-.475 2.13 1.546 3.521-.857 5.373-1.03 3.927-.366 6.678 1.154 8.626 4.345.84 1.375-.2 2.298-1.4 2.143-2.124-.277-2.5 1.131-3.16 2.486-.15.295-.714.387-.816.437zM30.468 33.836c-.495 1.083.198 3.761-2.689 4.7-.899.293-1.45-.19-2.144-.43.125-.33.307-.649.356-.99a.962.962 0 00-.206-.694 1.596 1.596 0 00-.684-.483 1.186 1.186 0 00-.361-.06c-.13.001-.257.019-.381.052-.43.287-.924.452-1.419.781-.495-.494.165-1.154.267-1.637a5.8 5.8 0 00.136-.32c.1-.133.206-.263.311-.397.525-.659 1.041-1.345 1.034-2.431 0-.72 1.902-1.624 3.012-1.043 1.03.535 3.48-.723 2.768 2.952zM58.192 36.656c-.028.425-.079.848-.152 1.268-.25 1.047-.53 2.085-.798 3.132-.243-.778-.442-1.573-.744-2.326-.192-.473-.371-1.228-1.079-.99-.835.28.017.804 0 1.227-.073 1.436 1.836 2.552.71 4.17-.886 1.277-1.187-.604-1.825-.372-2.55.932-2.509.216-1.107-1.605.197-.254-.057-.956-.247-1.387-1.021-2.307 1.052-5.342 3.605-5.217 1.445.064 1.449 1.21 1.637 2.1zM25.506 50.201c.225-.473-.04-1.69.035-2.266.093-.715.27-1.416.53-2.089.31-.803.667-1.666 1.187-2.359.34-.451.772-.748 1.085-.165.41.752-.678 2.335-.99 3.015-.606 1.29-1.236 2.574-1.847 3.864z"
            fill="#000"
          />
          <path
            d="M30.189 45.256c.025.466-.185 1.108-.254 1.4-.2.835-.39 2.103-1.428 2.274-1.204.198-.594-1.566-.375-2.11a6.595 6.595 0 01.853-1.567c.09-.117.267-.444.419-.495.577-.163.764.1.785.498zM30.26 50.592c.673-.203.66.592.546.895-.289.804-1.208 1.668-1.791 2.273-.149.152-.845-.435-.842-1.134.01-1.408.972-1.696 2.087-2.034z"
            fill="#fff"
          />
          <path
            d="M38.962 46.824c-.366-.041-.683-.02-.614.412.051.321.88.61.795.953-.181.745-3.051-.72-3.4-.872.308.135 1.188-2.842 1.464-3.103 1.138-1.086 2.533-.108 2.667 1.21.048.475.476 1.154-.073 1.431-.173.09-.524.005-.84-.031z"
            fill="#C4C3C6"
          />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip22">
          <path
            d="M0 38C0 17.013 17.013 0 38 0s38 17.013 38 38-17.013 38-38 38S0 58.987 0 38z"
            fill="#fff"
          />
        </clipPath>
        <clipPath id="prefix__clip23">
          <path
            fill="#fff"
            transform="translate(11.21 5.13)"
            d="M0 0h80.75v87.21H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
})

export default Maciej
