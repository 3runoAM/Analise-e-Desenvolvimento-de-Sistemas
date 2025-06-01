using System.Runtime.CompilerServices;

namespace TestePerformance1.Exercicio05;

public class DownloadClient{
    public static void Run(){
        DownloadManager downloadManager = new DownloadManager();
        downloadManager.DownloadCompleted += OnDownloadCompleted;
        
        downloadManager.StartDownload("Programando em C# 12");
    }
        
    public static void OnDownloadCompleted(String fileName)
    {
        Console.WriteLine($"{fileName} baixado com sucesso.");
    }
}