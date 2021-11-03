using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimplePlayer 
{
    public string playerName;
    public int xp;
    public int clicks;
    public int highScoreClicker = 0;
    public int highScoreSmasher = 0;
    public string lastPlayedClicker = "";
    public string lastPlayerSmasher = "";


    public SimplePlayer()
    {

    }

    public SimplePlayer(string playerName, int xp = 0,
        int clicks = 0)
    {
        this.playerName = playerName;
        this.xp = xp;
        this.clicks = clicks;
    }

    public string SaveToJson()
    {
        return JsonUtility.ToJson(this);
    }

    public string PrintPlayerDetails()
    {
        string playerDetails = "";
        playerDetails += "\nName: " + this.playerName;
        playerDetails += "\nXP: " + this.xp;
        playerDetails += "\nClicks: " + this.clicks;

        return playerDetails;
    }
}