using BlazorWebAssembly.Client;
using BlazorWebAssembly.Client.Shared;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.RootComponents.RegisterForJavaScript<Quote>(identifier: "quote",
    javaScriptInitializer: "initializeComponent");

await builder.Build().RunAsync();
