# ORDO Top 3 — Short Titles and Automatic Morning Delivery

This guide describes an **optional, free, device-side automation** for Apple Reminders. It is separate from the existing ORDO Top 3 one-tap integration. ORDO cannot install or authorize an iPhone automation remotely.

## Already configured

- Reminders list: **Today's Top 3**
- Existing Shortcut: **ORDO Top 3**
- Existing Shortcut actions: Receive input → Split Text by New Lines → Repeat with Each → Add Repeat Item to Today's Top 3 → End Repeat

Do **not** delete or overwrite that shortcut. The new feature passes text into it.

## Create second shortcut: ORDO Daily Auto

1. Open Apple Shortcuts → **+** → rename the new shortcut to **ORDO Daily Auto**.
2. Add **Current Date**.
3. Add **Format Date**. Tap the date format setting, choose **Custom**, and enter exactly **EEEE** (four capital E's). The result is the current full weekday name, e.g. **Monday**, based on your iPhone's calendar/timezone and language.
4. Add **Text**. Enter **https://dhadder7.github.io/Ordo/top3-feed/** followed by the *Formatted Date* magic variable, followed by **.txt**. Don't type the words "Formatted Date" as literal text; insert the blue variable.
5. Add **Get Contents of URL**. Set its URL to the *Text* result from the preceding action (or add a **URL** action containing that text and use the URL result). Method **GET**.
6. Add **Run Shortcut**. Choose the existing **ORDO Top 3** shortcut. Set its Input to the **Contents of URL** result, **not** Current Date or Text.
7. Save. The flow should be: **Current Date → Format Date (EEEE) → Text(URL) → Get Contents of URL → Run Shortcut (ORDO Top 3; input = Contents of URL)**.

## Schedule every morning

1. In Shortcuts open the **Automation** tab and tap **+**, or select the new shortcut and choose **Edit → Automation** if your iOS version offers it.
2. Choose **Time of Day**.
3. Select **7:00 AM**, **Daily**, and **Run Immediately** (wording may vary; on older iOS turn off Ask Before Running).
4. Choose the **ORDO Daily Auto** shortcut.
5. In shortcut settings, allow running while locked if offered. Grant Reminders/network access prompts when first tested.

The phone must be on, able to reach the website and allowed to run the automation. Apple can still require individual permissions. Confirm a successful test before relying on it.

## What appears each morning?

The weekday feed contains exactly three short, human-readable tasks from the published ORDO weekly curriculum, such as *Practice German*, *Train martial arts*, and *Practice chess*. For example:

- Monday: https://dhadder7.github.io/Ordo/top3-feed/Monday.txt
- Saturday: https://dhadder7.github.io/Ordo/top3-feed/Saturday.txt

If no web connection is available or an action fails, that day's reminders might not be created.

## Important limitations

- The feed is based on the published, fixed ORDO **weekly curriculum**, not the personalized selections or completed-step data stored privately in Safari localStorage. Those are not accessible to a background Shortcut and are not uploaded anywhere.
- The ORDO website's **Send to Reminders** button still creates the more personalized set; you can continue using it instead of the daily feed.
- The Shortcut does **not** delete or clear older tasks. Reminders from prior days can accumulate. Review/remove stale entries manually; otherwise the list may grow beyond three. Do not run both manual and automatic sync for the same day unless you intend to create duplicates.
- Completed status in Reminders does not sync to ORDO.
- All files are static/free; no external API keys or GitHub Actions are required.

## Suggested first test

Test **ORDO Daily Auto** once while the Today's Top 3 list is empty (or after checking the three currently there). If three short tasks appear, then enable the morning automation. Avoid pressing it multiple times because it will create duplicates.
