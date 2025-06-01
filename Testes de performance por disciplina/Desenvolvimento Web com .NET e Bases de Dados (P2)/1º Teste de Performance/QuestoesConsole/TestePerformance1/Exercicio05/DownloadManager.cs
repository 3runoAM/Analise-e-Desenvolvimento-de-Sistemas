namespace TestePerformance1.Exercicio05;

public class DownloadManager{
    public delegate void DownloadProgress(String fileName);
    public event DownloadProgress DownloadCompleted;
    
    public void StartDownload(String fileName)
    {
        Console.WriteLine("Iniciando download...");
        Thread.Sleep(5000);
        DownloadCompleted?.Invoke(fileName);
    }
}