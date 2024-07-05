// 保存暱稱
var nickname = "";

// 设置暱稱
function setNickname() {
    var nicknameInput = document.getElementById("nicknameInput");
    var chatControls = document.getElementById("chatControls");
    var chatContainer = document.getElementById("chatContainer");

    nickname = nicknameInput.value.trim();
    if (nickname !== "") {
        // 隐藏暱稱输入框，显示聊天控制区域
        nicknameInput.style.display = "none";
        chatControls.style.display = "block";
        chatContainer.innerHTML = "<div>你的暱稱为：" + nickname + "</div>";
    }
}

// 发送消息
function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var chatContainer = document.getElementById("chatContainer");

    var message = messageInput.value.trim();
    if (message !== "") {
        var messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");
        messageElement.textContent = nickname + "：" + message;
        chatContainer.appendChild(messageElement);

        // 清空输入框内容
        messageInput.value = "";

        // 滚动到底部，显示最新消息
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}

// 上传图片
function sendImage() {
    var imageInput = document.getElementById("imageInput");
    var chatContainer = document.getElementById("chatContainer");

    var file = imageInput.files[0]; // 获取用户选择的文件
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imageElement = document.createElement("img");
            imageElement.src = e.target.result; // 设置图片的src为读取到的DataURL
            chatContainer.appendChild(imageElement);

            // 滚动到底部，显示最新图片
            chatContainer.scrollTop = chatContainer.scrollHeight;
        };
        reader.readAsDataURL(file); // 读取文件并转换为DataURL格式
    }
}
