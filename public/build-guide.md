# Build a SafeScribe Device – Hardware and Setup Guide

This guide walks you through buying the parts and setting up a SafeScribe device from scratch. You'll end up with a touchscreen kiosk that records meetings, transcribes and summarizes them on-device, and can email you the notes. No prior Raspberry Pi or SafeScribe experience required.

**Time:** About 1–2 hours after parts arrive (excluding OS download and imaging).

---

## 1. Hardware list

Buy the following. Links are to recommended products (Amazon).

| Item | Spec | Link |
|------|------|------|
| **Raspberry Pi 5** | 8GB RAM, active cooler | [Raspberry Pi 5 8GB + active cooler](https://a.co/d/0aSXOiH8) |
| **MicroSD card** | At least 32GB (Class 10 recommended) | [SanDisk 32GB microSD (Made for Amazon)](https://a.co/d/02NdN10Q) |
| **USB microphone** | Plug-and-play, Raspberry Pi compatible | [SunFounder USB mini microphone for Raspberry Pi](https://a.co/d/0en44Lyr) |
| **Case with touchscreen** | Raspberry Pi case with integrated touchscreen LCD (e.g. 3.5" 480×320) | [CUQI 3.5" touchscreen with Pi 5 case](https://a.co/d/0bNt8Ogu) |
| **Power supply** | 27W, 5.1V, 5A USB-C (for Pi 5) | [27W 5.1V 5A USB-C power supply](https://a.co/d/03FXs8qm) |

**For first-time setup:** USB keyboard and mouse can be helpful (or use the touchscreen after the OS and any display drivers are set up).

**Display note:** SafeScribe's UI is designed for about 800×480 landscape. A 480×320 touchscreen works; the interface scales to fit.

---

## 2. Raspberry Pi OS – image and SD card

You must use **64-bit** Raspberry Pi OS. SafeScribe uses Ollama's Linux ARM64 build; 32-bit OS is not supported.

### What to install

- **OS:** Raspberry Pi OS **(64-bit)**
- **Variant:** **Desktop** (the standard desktop image; "Desktop and recommended software" is optional)
- **Tool:** [Raspberry Pi Imager](https://www.raspberrypi.com/software/) on your Mac or PC

### Steps

1. Download and install **Raspberry Pi Imager** from [raspberrypi.com/software](https://www.raspberrypi.com/software/).
2. Insert the MicroSD card into your computer (via adapter if needed).
3. Open Imager → **Choose OS** → **Raspberry Pi OS (64-bit)** → **Raspberry Pi OS (64-bit)** with **Desktop**.
4. **Choose Storage** → select your SD card.
5. **(Optional)** Click the gear icon to set:
   - Hostname
   - Enable SSH (if you want to access the Pi over the network)
   - Username and password
   - WiFi country and credentials (so the Pi is online on first boot)
6. Click **Write** and wait until the SD card is ready.

**SD size:** 32GB minimum.

---

## 3. First boot and OS setup

1. **Assemble the Pi:** Insert the imaged SD card into the Pi. Connect the display (HDMI or the case's display cable per the case instructions), USB microphone, and power supply. If you use a case with an integrated screen, follow the manufacturer's steps to attach the Pi and connect the display.
2. **Power on** and wait for the first boot.
3. Complete the **initial setup wizard** (language, timezone, keyboard, WiFi if not set in Imager, user password).
4. Ensure the Pi is **on the network** (WiFi or Ethernet) for installing SafeScribe.
5. **If your case has a third-party touchscreen:** Follow the manufacturer's guide to install any display/touch drivers so the touchscreen works. You can do this before or right after installing SafeScribe.

---

## 4. Install SafeScribe (on the Pi)

On the Pi, open **Terminal** (Menu → Accessories → Terminal, or from the taskbar).

**One-command install (recommended):**

```bash
curl -fsSL https://raw.githubusercontent.com/syedhadi816/SafeScribe/main/raspberry-pi/bootstrap.sh | bash
```

- No GitHub account or login required.
- This clones the SafeScribe repo to `~/SafeScribe` and runs the full installer (system packages, Python environment, Ollama + model, frontend build, systemd service, kiosk autostart).
- Allow **10–20+ minutes**; downloading the Ollama model can take a while.

**Alternative – clone then install:**

```bash
git clone https://github.com/syedhadi816/SafeScribe.git
cd SafeScribe
./raspberry-pi/install.sh
```

---

## 5. Post-install configuration

### Enable desktop autologin (required for kiosk on boot)

1. In Terminal, run: `sudo raspi-config`
2. **Boot Options** → **Desktop / CLI** → **Desktop Autologin** → **Finish**.

### Email setup

Create a **16-character app password** for your email (you'll enter it in the SafeScribe app):

- **Gmail:** [Google App Passwords](https://myaccount.google.com/apppasswords) (2-Step Verification must be on).
- **Outlook:** [Microsoft Security → App passwords](https://account.microsoft.com/security).

When you first open SafeScribe, use **Get Started** → **Email setup** to enter your email and this app password. You can also change it later in **Settings** → **Email**.

### Reboot

```bash
sudo reboot
```

---

## 6. First run and in-app setup

1. After reboot, the Pi logs in automatically and **Chromium** should open in **fullscreen** with SafeScribe.
2. Tap **Get Started**.
3. If the Pi is already on WiFi, you go straight to **Email** setup. If not, you'll see **WiFi** first; choose your network (and enter the password if needed), then continue to **Email**.
4. **Email setup:** Enter your email → **Next** → enter your **16-character app password** → **Done**.
5. You can now **record a meeting**; when processing finishes, notes are emailed to you.

---

## 7. Troubleshooting and references

**SafeScribe doesn't appear after boot**

- Check the backend: `sudo systemctl status safescribe`
- Check autostart: `ls ~/.config/autostart/safescribe-kiosk.desktop` (should exist).
- Start the kiosk manually: `~/SafeScribe/raspberry-pi/kiosk.sh` (use your actual SafeScribe path if different).

**Blank or black screen**

- Press **Ctrl+Alt+F2** to switch to a text console, log in, then:
  ```bash
  sudo systemctl restart safescribe
  ~/SafeScribe/raspberry-pi/kiosk.sh
  ```

**Exit fullscreen / kiosk mode**

- **Alt+F4** or **Ctrl+W** to close Chromium. To start again: `~/SafeScribe/raspberry-pi/kiosk.sh`

---

## 8. Summary checklist

- Buy hardware (Pi 5 8GB + cooler, MicroSD 32GB+, USB mic, case with touchscreen, 27W USB-C power supply).
- Flash **Raspberry Pi OS 64-bit (Desktop)** to the SD card with Raspberry Pi Imager.
- First boot: complete OS wizard, connect to network; install any touchscreen drivers per case instructions.
- Run the one-command SafeScribe install in Terminal.
- Enable **Desktop Autologin** in `sudo raspi-config`.
- Reboot; SafeScribe should open in fullscreen.
- Complete in-app **Get Started** → WiFi (if needed) → Email setup.
- Record a meeting and receive notes by email.
