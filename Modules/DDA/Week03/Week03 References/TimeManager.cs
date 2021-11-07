using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class TimeManager : MonoBehaviour
{

    public TMP_Text timeElapsedDisplay;
    public TMP_Text fpsTxt;
    public TMP_Text timeRemainingDisplay;
    public Button startButton;
    public float time;

    private float timeRemaining = 5;
    private float msec;
    private float sec;
    private float min;

    private float currentSec;
    private float timeLimit = 0;
    public bool isDead;

    private string resetText = "00:00:00";

    IEnumerator StopWatch()
    {
        while (true)
        {
            int fps = (int)(1 / Time.unscaledDeltaTime);
            fpsTxt.text = fps + " fps";


            if (timeRemaining > 0)
            {
                timeRemaining -= Time.deltaTime;
                time += Time.deltaTime;
                DisplayTime(timeRemaining);
            }
            else
            {
                timeRemaining = 0;
                time = timeLimit;
                timeRemainingDisplay.color = Color.red;
                timeElapsedDisplay.color = Color.red;

            }
            yield return null;
        }
    }

    void DisplayTime(float timeToDisplay)
    {
       
        if(timeToDisplay < 0)
        {
            timeToDisplay = 0;
            time = timeLimit;
            Debug.Log("time limit" + timeLimit);
            
        }
        float min = Mathf.FloorToInt(timeToDisplay / 60);
        float sec = Mathf.FloorToInt(timeToDisplay % 60);//removes the mins
    
        float msec = (timeToDisplay % 1) * 1000;//Mathf.FloorToInt((timeRemaining - sec) * 100);
        Debug.Log("msec... " + msec);
        timeRemainingDisplay.text = string.Format("{0:00}:{1:00}:{2:00}", min, sec, msec);

        Debug.LogFormat("Time {0}/// {1}: {2}", time, (int)time, timeLimit);

        
        msec = Mathf.FloorToInt((time - (int)time) * 100);
        sec = Mathf.FloorToInt(time % 60);
        min = Mathf.FloorToInt(time / 60);
        currentSec = sec;

        timeElapsedDisplay.text = string.Format("{0:00}:{1:00}:{2:00}", min, sec, msec);


    }

    // Start is called before the first frame update
    private void Start()
    {
        //StartTimer();
    }

    public void StartTimer()
    {
        startButton.enabled = false;
        StartCoroutine("StopWatch");
    }


    public void StopTimer()
    {
        startButton.enabled = true;
        StopCoroutine("StopWatch");
    }

    public void StopWatchReset()
    {
        timeRemaining = 0;
        timeRemainingDisplay.text = resetText;
        timeRemainingDisplay.color = Color.white;

        timeElapsedDisplay.text = resetText;
        timeElapsedDisplay.color = Color.white;
     }

    public void SetTimeRemaining(float newTimeRemaing)
    {
        timeRemaining = newTimeRemaing;
        timeLimit = newTimeRemaing;
    }

    public float GetTimeRemaining()
    {
        return timeRemaining;
    }

    public float GetCurrentSec()
    {
        return currentSec;
    }


}
