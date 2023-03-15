using Microsoft.AspNetCore.Components;

namespace BlazorWebAssembly.Client.Models
{
    [EventHandler("oncustompaste", typeof(CustomPasteEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
    public static class EventHandlers
    {
        // 這個 class 不需要任何 property 或 field，只是讓我們放
        // [EventHandler] attributes 可以讓 Razor compiler 解析事件類型，這個 class
        // 影響編譯器輸出結果跟編輯器的 code intellisense
    }
}
