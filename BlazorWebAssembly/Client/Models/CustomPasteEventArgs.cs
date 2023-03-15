namespace BlazorWebAssembly.Client.Models
{
    public class CustomPasteEventArgs : EventArgs
    {
        // JavaScript 提供的資料對應 property
        public DateTime EventTimestamp { get; set; }
        public string PastedData { get; set; }
    }
}
